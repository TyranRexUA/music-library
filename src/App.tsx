import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import SearchTracksList from './components/SearchTracksList/SearchTracksList';
import TopTracksList from './components/TopTracksList/TopTracksList';

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/' render={() => <TopTracksList />} />
                <Route path='/artist/:artistName' render={() => <TopTracksList />} />
                <Route path='/search/:searchValue?' render={() => <SearchTracksList />} />
                <Route path='*' render={() => <Redirect to='/' />} />
            </Switch>
        </div>
    );
}

export default App;
