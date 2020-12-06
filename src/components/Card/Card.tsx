import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Card.module.scss'


interface propsType {
    img?: string
    name: string
    artistName: string
}

const Card: React.FC<propsType> = ({ img, name, artistName }) => {

    return (
        <div className={s.Card}>
            {img && 
                <img src={img} alt=""/>}
            <div>
                <div className={s.Card__name}>
                    {name}
                </div>

                <NavLink className={s.Card__artist} to={`/artist/${artistName}`}>
                    {artistName}
                </NavLink>
            </div>

        </div>
    );
}

export default memo(Card);