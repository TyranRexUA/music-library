import React, { memo } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import cn from 'classnames'
import s from './Header.module.scss'


const Header: React.FC = () => {
    let params = useParams<{ searchValue?: string }>()
    let searchSubmit = useSelector((state: RootState) => state.searchTracksList.searchSubmit)

    return (
        <div className={s.Header}>
            <NavLink className={cn(s.Header__btn, {[s.active]: !params.hasOwnProperty('searchValue')})} to='/'>
                <span>
                    Popular Tracks
                </span>
            </NavLink>

            <NavLink className={cn(s.Header__btn, {[s.active]: params.hasOwnProperty('searchValue')})} to={`/search/${searchSubmit}`}>
                <span>
                    Search Tracks
                </span>
            </NavLink>
        </div>
    );
}

export default memo(Header);