import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { requestTopTracks } from '../../store/topTracksListReducer';

const TopTracksList: React.FC = () => {
    const dispatch = useDispatch()
    let topTracks = useSelector((state: RootState) => state.topTracksList.tracks)

    useEffect(() => {
        dispatch(requestTopTracks())
    }, [])

    // I use key={id} because track.name, track.artist.name, track.mbid are repeated

    return (
        <div>
            {topTracks.map((track, id) => 
                <div key={id}>
                    <img src={track.image[1]['#text']} alt=""/>
                    {track.name} / {track.artist.name}
                </div>
            )}
        </div>
    );
}

export default memo(TopTracksList);