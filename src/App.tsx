import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import ArtistPage from './components/ArtistPage/ArtistPage';
import Header from './components/Header/Header';
import SearchTracksList from './components/SearchTracksList/SearchTracksList';
import TopTracksList from './components/TopTracksList/TopTracksList';

const Main = <>
    <Header />
    <TopTracksList />
</>

const Search = <>
    <Header />
    <SearchTracksList />
</>

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' render={() => Main } />
                <Route path='/artist/:artistName' render={() => <ArtistPage /> } />
                <Route path='/search/:searchValue?' render={() => Search } />
                <Route path='*' render={() => <Redirect to='/' />} />
            </Switch>
        </div>
    );
}

export default App;
