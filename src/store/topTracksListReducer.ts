import { ThunkAction } from 'redux-thunk';
import { topTrackType } from '../types/types';
import API from '../API/API';
import { RootState } from './store';

const initialState = {
    tracks: [] as topTrackType[],
    nextPage: 1,
    isLoading: false
};

type stateType = typeof initialState
type actionsTypes = ReturnType<typeof setTopTracks> | ReturnType<typeof changeIsLoading> |  ReturnType<typeof addMoreTopTracks>

const topTracksReducer = (state = initialState, action: actionsTypes): stateType => {
    switch (action.type) {
        case 'topTracksList/SET_TOP_TRACKS':
            return {
                ...state,
                tracks: action.payload,
                nextPage: action.payload.length > 0 ? ++state.nextPage : 1 // becasue API pagination is broken
            };
        case 'topTracksList/ADD_MORE_TOP_TRACKS':
            return {
                ...state,
                tracks: [...state.tracks, ...action.payload],
                nextPage: action.payload.length > 0 ? ++state.nextPage : 1 // becasue API pagination is broken
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
const addMoreTopTracks = (data: topTrackType[]) => ({ type: 'topTracksList/ADD_MORE_TOP_TRACKS', payload: data } as const);
const changeIsLoading = (isLoading: boolean) => ({ type: 'topTracksList/CHANGE_IS_LOADING', isLoading } as const);


export const requestTopTracks = (): ThunkAction<void, RootState, unknown, actionsTypes> => {
    return async (dispatch) => {
        dispatch(changeIsLoading(true))
        let response = await API.getTopTracks();
            dispatch(setTopTracks(response))
            dispatch(changeIsLoading(false))
    }
};

export const requestMoreTopTracks = (next: number): ThunkAction<void, RootState, unknown, actionsTypes> => {
    return async (dispatch) => {
        dispatch(changeIsLoading(true))
        let response = await API.getMoreTopTracks(next);
            dispatch(addMoreTopTracks(response))
            dispatch(changeIsLoading(false))
    }
};