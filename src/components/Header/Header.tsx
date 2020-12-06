import React, { memo } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


const Header: React.FC = () => {
    let params = useParams<{ searchValue?: string }>()
    let searchSubmit = useSelector((state: RootState) => state.searchTracksList.searchSubmit)

    return (
        <div>
            <NavLink to='/'>
                <span>
                    Popular Tracks
                </span>
            </NavLink>

            <NavLink to={`/search/${searchSubmit}`}>
                <span>
                    Search Tracks
                </span>
            </NavLink>
        </div>
    );
}

export default memo(Header);