import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login';
import SearchBar from './SearchBar';
import Description from './ImageDescription';

class App extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    
                        <Route exact path="/" component={Login} />
                        <Route exact path="/search" component={SearchBar} />
                        <Route exact path="/pictures/:id" component={Description} />

                </Switch>
    
            </Router>
    
        )

    }
}  

export default App;
