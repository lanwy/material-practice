import React from 'react'  
import { render } from 'react-dom'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import HelloWorld from './views/origin/HelloWorld';
import {ClockOne,ClockTwo }from './views/origin/Clock';


import App from './views/app/App';
import AppBar from './views/AppBar';
import Avatar from './views/Avatar';
import Grid from './views/Grid.jsx';
import Card from './views/Card';
import Card2 from './views/Card2';
import Typography from './views/Typography';

render((
    <Router>
        <Route render={({location}) => {
            return (
                <Switch key={location.pathname}>
                    <Route location={location} path="/hello" component={HelloWorld}/>
                    <Route location={location} path="/clock1" component={ClockOne}/>
                    <Route location={location} path="/clock2" component={ClockTwo}/>

                    <Route location={location} path="/app" component={App}/>
                    <Route location={location} path="/appbar" component={AppBar}/>
                    <Route location={location} path="/avatar" component={Avatar}/>
                    <Route location={location} path="/grid" component={Grid}/>
                    <Route location={location} path="/card" component={Card}/>
                    <Route location={location} path="/card2" component={Card2}/>
                    <Route location={location} path="/typography" component={Typography}/>
                </Switch>
            )
        }}/>
    </Router>
), 
document.getElementById('root'))
