import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import Navigation from './container/Navigation/Navigation';
import Home from './container/Home/Home';
import registerServiceWorker from './registerServiceWorker';
import {store} from './redux/store';

ReactDOM.render(
            <Provider store={store}>
            <BrowserRouter>
                <Navigation>
                    <Switch>
                        <Route expe path="/" component={Home} />
                    </Switch>
                </Navigation>
                </BrowserRouter>
            </Provider>
    , document.getElementById('root'));
registerServiceWorker();
