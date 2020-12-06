import { ThunkAction } from 'redux-thunk';
import { topTrackType } from '../types/types';
import API from '../API/API';
import { RootState } from './store';

const initialState = {
    tracks: [] as topTrackType[],
    isLoading: false
};

type stateType = typeof initialState
type actionsTypes = ReturnType<typeof setTopTracks> | ReturnType<typeof changeIsLoading>

const topTracksReducer = (state = initialState, action: actionsTypes): stateType => {
    switch (action.type) {
        case 'topTracksList/SET_TOP_TRACKS':
            return {
                ...state,
                tracks: action.payload,
            };
        case 'topTracksList/CHANGE_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default: return state;
    }
}

export default topTracksReducer;
const setTopTracks = (data: topTrackType[]) => ({ type: 'topTracksList/SET_TOP_TRACKS', payload: data } as const);
const changeIsLoading = (isLoading: boolean) => ({ type: 'topTracksList/CHANGE_IS_LOADING', isLoading } as const);


export const requestTopTracks = (): ThunkAction<void, RootState, unknown, actionsTypes> => {
    return async (dispatch) => {
        dispatch(changeIsLoading(true))
        let response = await API.getTopTracks();
            dispatch(setTopTracks(response))
            dispatch(changeIsLoading(false))
    }
};