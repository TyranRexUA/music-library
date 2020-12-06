import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { setSearch, requestSearchTracks, requestMoreSearchTracks } from '../../store/searchTracksListReducer';
import { RootState } from '../../store/store';
import Card from '../Card/Card';
import s from './SearchTracksList.module.scss'

const SearchTracksList: React.FC = () => {
    const dispatch = useDispatch()
    let topTracks = useSelector((state: RootState) => state.searchTracksList.tracks)
    let nexPageTopTracks = useSelector((state: RootState) => state.searchTracksList.nextPage)
    let isLoading = useSelector((state: RootState) => state.searchTracksList.isLoading)
    let searchValue = useSelector((state: RootState) => state.searchTracksList.searchValue)
    let searchSubmit = useSelector((state: RootState) => state.searchTracksList.searchSubmit)
    let history = useHistory()
    let params = useParams<{ searchValue?: string }>()

    useEffect(() => { // if url '/search/...' changes
        if (params.searchValue) {
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

    const searchLink = useCallback((e: React.FormEvent<HTMLFormElement>) => {
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
            <div className={s.fixed}>
                <form className={s.SearchForm} onSubmit={searchLink}>
                    <input
                        onChange={(e) => dispatch(setSearch(e.target.value))}
                        type="text"
                        value={searchValue}
                        placeholder='Search tracks...' />
                    <button type="submit" />
                </form>
            </div>

            {topTracks.length === 0 &&
                <div className={s.TracksNotFound}>
                    <span>Tracks Not Found</span>
                </div>
            }

            {topTracks.length > 0 &&
                <div className={s.List}>
                    {topTracks.map((track, id) =>
                        <Card key={id} name={track.name} artistName={track.artist} />
                    )}
                </div>
            }
        </>
    );
}

export default memo(SearchTracksList);