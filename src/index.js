import React from 'react'  
import { render } from 'react-dom'
import App from './views/app/App';
import AppBar from './views/AppBar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
render((
    <Router>
        <Route render={({location}) => {
            return (
                <Switch key={location.pathname}>
                    <Route location={location} path="/app" component={App}/>
                    <Route location={location} path="/appbar" component={AppBar}/>
                </Switch>
            )
        }}/>
    </Router>
), 
document.getElementById('root'))
