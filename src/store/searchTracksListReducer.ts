import { ThunkAction } from 'redux-thunk';
import { searchTrackType } from '../types/types';
import API from './../API/API';
import { RootState } from './store';

const initialState = {
    searchSubmit: '', // for addMoreSearchTracks, because searchValue always update
    searchValue: '', 
    tracks: [] as searchTrackType[],
    nextPage: 1,
    isLoading: false
};

type stateType = typeof initialState
type actionsTypes = ReturnType<typeof setSearchTracks> | ReturnType<typeof changeIsLoading> | ReturnType<typeof setSearch> | ReturnType<typeof addMoreSearchTracks>

const searchTracksListReducer = (state = initialState, action: actionsTypes): stateType => {
    switch (action.type) {
        case 'searchTracksList/SET_SEARCH_TRACKS':
            return {
                ...state,
                tracks: action.payload,
                nextPage: action.payload.length > 0 ? ++state.nextPage : 1,
                searchSubmit:  action.searchSubmit
            };
        case 'topTracksList/ADD_MORE_SEARCH_TRACKS':
            return {
                ...state,
                tracks: [...state.tracks, ...action.payload],
                nextPage: action.payload.length > 0 ? ++state.nextPage : 1
            };
        case 'searchTracksList/CHANGE_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            };
        case 'searchTracksList/SET_SEARCH':
            return {
                ...state,
                searchValue: action.searchValue
            };
        default: return state;
    }
}

export default searchTracksListReducer;
const setSearchTracks = (data: searchTrackType[],  searchSubmit: string) => ({ type: 'searchTracksList/SET_SEARCH_TRACKS', payload: data,  searchSubmit } as const);
const addMoreSearchTracks = (data: searchTrackType[]) => ({ type: 'topTracksList/ADD_MORE_SEARCH_TRACKS', payload: data } as const);
const changeIsLoading = (isLoading: boolean) => ({ type: 'searchTracksList/CHANGE_IS_LOADING', isLoading } as const);
export const setSearch = (searchValue: string) => ({ type: 'searchTracksList/SET_SEARCH', searchValue } as const);


export const requestSearchTracks = (searchValue: string): ThunkAction<void, RootState, unknown, actionsTypes> => {
    return async (dispatch) => {
        dispatch(changeIsLoading(true))
        let response = await API.getSearchTracks(searchValue);
            dispatch(setSearchTracks(response, searchValue))
            dispatch(changeIsLoading(false))
    }
};

export const requestMoreSearchTracks = (searchSubmit: string, next: number): ThunkAction<void, RootState, unknown, actionsTypes> => {
    return async (dispatch) => {
        dispatch(changeIsLoading(true))
        let response = await API.getMoreSearchTracks(searchSubmit, next);
            dispatch(addMoreSearchTracks(response))
            dispatch(changeIsLoading(false))
    }
};