import React, { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { requestMoreTopTracks, requestTopTracks } from '../../store/topTracksListReducer';
import Card from '../Card/Card';
import s from './TopTracksList.module.scss'

const TopTracksList: React.FC = () => {
    const dispatch = useDispatch()
    let topTracks = useSelector((state: RootState) => state.topTracksList.tracks)
    let nexPageTopTracksList = useSelector((state: RootState) => state.topTracksList.nextPage)
    let isLoading = useSelector((state: RootState) => state.topTracksList.isLoading)

    useEffect(() => {
        if (topTracks.length === 0) { // if url changes, save array of topTracks in state
            dispatch(requestTopTracks())
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', showMoreTopTracks)

        return () => {
            window.removeEventListener('scroll', showMoreTopTracks)
        }
    }, [nexPageTopTracksList, isLoading])

    const showMoreTopTracks = useCallback(() => { // tracks are added when scrolling ( because API pagination is broken )
        if (window.pageYOffset > (document.documentElement.scrollHeight - document.documentElement.clientHeight - 50) && !isLoading && nexPageTopTracksList > 1) {
            dispatch(requestMoreTopTracks(nexPageTopTracksList));
        }
    }, [isLoading, nexPageTopTracksList])

    // I use key={id} because track.name, track.artist.name, track.mbid are repeated

    return (
        <div className={s.List}>
            {topTracks.map((track, id) => 
                <Card key={id} img={track.image[1]['#text']} name={track.name} artistName={track.artist.name} />
            )}
        </div>
    );
}

export default memo(TopTracksList);