import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { cutText } from '../../secondaryFunction';
import { requestArtistInfo } from '../../store/artistPageReducer';
import { RootState } from '../../store/store';
import s from './ArtistPage.module.scss'

const ArtistPage: React.FC = () => {
    const dispatch = useDispatch()
    let artist = useSelector((state: RootState) => state.artistPage.artist)
    let errorMessage = useSelector((state: RootState) => state.artistPage.errorMessage)
    let history = useHistory()
    let params = useParams<{ artistName?: string }>()

    useEffect(() => { // if url '/artist/...' changes
        if (params.artistName) {
            dispatch(requestArtistInfo(params.artistName))
        }
    }, [params.artistName, history.location])

    // we can get artist or error-message

    if (errorMessage) {
        return (
            <div className={s.error}>
                <span>
                    {errorMessage}
                </span>
                <NavLink to='/'>
                    To Main Page
                </NavLink>
            </div>
        )
    } else {
        return (

            <div className={s.ArtistPage}>
                <div className={s.ArtistPage__name}>
                    {artist.name}
                </div>

                <div className={s.float}>
                    {artist.image &&
                        <img src={artist.image[3]['#text']} alt="" />
                    }

                    {artist.bio && <div dangerouslySetInnerHTML={{ __html: cutText(artist.bio.content) }} />}
                </div>

                {artist.tags && artist.tags.tag.length > 0 &&
                    <div className={s.ArtistPage__tags}>
                        <div className={s.title}>
                            TAGS:
                            </div>

                        {artist.tags.tag.map(tag =>
                            <div className={s.name} key={tag.name}>
                                {tag.name}
                            </div>
                        )}
                    </div>
                }

            </div>
        )
    };
}

export default memo(ArtistPage);