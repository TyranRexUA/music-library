import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import topTracksListReducer from './topTracksListReducer';

const reducers = combineReducers({
    topTracksList: topTracksListReducer,
});

export type RootState = ReturnType<typeof reducers>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // ReduxDevTools for Chrome
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)))

export default store;