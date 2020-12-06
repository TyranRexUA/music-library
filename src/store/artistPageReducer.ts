import { ThunkAction } from 'redux-thunk';
import { artist, artistInfoType } from '../types/types';
import API from './../API/API';
import { RootState } from './store';

const initialState = {
    artist: {} as artist,
    errorMessage: null as null | string,
    isLoading: false,
};

type stateType = typeof initialState
type actionsTypes = ReturnType<typeof setArtistInfo> | ReturnType<typeof changeIsLoading> | ReturnType<typeof setErrorMessage>
const artistPageReducer = (state = initialState, action: actionsTypes): stateType => {
    switch (action.type) {
        case 'artistInfo/SET_ARTIST_INFO':
            return {
                ...state,
                errorMessage: null,
                artist: action.payload as artist
            };
        case 'artistInfo/CHANGE_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case 'artistInfo/SET_ERROR_MESSAGE':
            return {
                ...state,
                artist: {} as artist,
                errorMessage: action.errorMessage
            }
        default: return state;
    }
}

export default artistPageReducer;
const setArtistInfo = (data: artistInfoType) => ({ type: 'artistInfo/SET_ARTIST_INFO', payload: data.artist} as const);
const changeIsLoading = (isLoading: boolean) => ({ type: 'artistInfo/CHANGE_IS_LOADING', isLoading } as const);
const setErrorMessage = (errorMessage: string) => ({ type: 'artistInfo/SET_ERROR_MESSAGE', errorMessage } as const);


export const requestArtistInfo = (artistName: string): ThunkAction<void, RootState, unknown, actionsTypes> => {
    return async (dispatch) => {
        dispatch(changeIsLoading(true))
        let response = await API.getArtistInfo(artistName);
            if (response.hasOwnProperty('artist')) { // we can get artist or error-message
                dispatch(setArtistInfo(response))
            } else {
                dispatch(setErrorMessage(response.message as string))
            }
            dispatch(changeIsLoading(false))
    }
};