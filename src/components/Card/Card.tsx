import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';


interface propsType {
    img?: string
    name: string
    artistName: string
}

const Card: React.FC<propsType> = ({ img, name, artistName }) => {

    return (
        <div>
            {img && 
                <img src={img} alt=""/>}
            <div>
                <div>
                    {name}
                </div>

                <NavLink to={`/artist/${artistName}`}>
                    {artistName}
                </NavLink>
            </div>

        </div>
    );
}

export default memo(Card);