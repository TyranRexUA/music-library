import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { setSearch, requestSearchTracks, requestMoreSearchTracks } from '../../store/searchTracksListReducer';
import { RootState } from '../../store/store';
import Card from '../Card/Card';

const SearchTracksList: React.FC = () => {
    const dispatch = useDispatch()
    let topTracks = useSelector((state: RootState) => state.searchTracksList.tracks)
    let nexPageTopTracks = useSelector((state: RootState) => state.searchTracksList.nextPage)
    let isLoading = useSelector((state: RootState) => state.searchTracksList.isLoading)
    let searchValue = useSelector((state: RootState) => state.searchTracksList.searchValue)
    let searchSubmit = useSelector((state: RootState) => state.searchTracksList.searchSubmit)
    let history = useHistory()
    let params = useParams<{ searchValue?: string }>()

    useEffect(() => {
        if (params.searchValue) { // if url '/artist/...' changes
            dispatch(setSearch(params.searchValue))
            dispatch(requestSearchTracks(params.searchValue))
        }
    }, [history.location])

    useEffect(() => {
        window.addEventListener('scroll', showMoreSearchTracks)

        return () => {
            window.removeEventListener('scroll', showMoreSearchTracks)
        }
    }, [nexPageTopTracks, isLoading])

    const showMoreSearchTracks = useCallback(() => { // tracks are added when scrolling ( because API pagination is broken )
        if (window.pageYOffset > (document.documentElement.scrollHeight - document.documentElement.clientHeight - 50) && !isLoading && nexPageTopTracks > 1) {
            dispatch(requestMoreSearchTracks(searchSubmit, nexPageTopTracks));
        }
    }, [isLoading, nexPageTopTracks, searchSubmit])

    const searchLink = useCallback((e) => {
        e.preventDefault()
        if (searchValue) {
            history.push(`/search/${searchValue}`);
        } else {
            history.push('/');
        }
    }, [searchValue])

    // I use key={id} because track.name, track.artist.name, track.mbid are repeated

    return (
        <>
            <div>
                <form onSubmit={searchLink}>
                    <input
                        onChange={(e) => dispatch(setSearch(e.target.value))} // update seacrhValue in state
                        type="text"
                        value={searchValue}
                        placeholder='Search tracks...' />
                    <button type="submit" />
                </form>
            </div>

            {topTracks.length === 0 &&
                <div>
                    <span>Tracks Not Found</span>
                </div>
            }

            <div>
                {topTracks.map((track, id) =>
                    <Card key={id} name={track.name} artistName={track.artist} /> // I use key={id} because track.name, track.artist.name, track.mbid are repeated
                )}
            </div>
        </>
    );
}

export default memo(SearchTracksList);