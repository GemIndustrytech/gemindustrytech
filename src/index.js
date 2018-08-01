import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import Navigation from './container/Navigation/Navigation';
import Home from './container/Home/Home';
import registerServiceWorker from './registerServiceWorker';
import {store} from './redux/store';
import Images from './container/Images/images';

ReactDOM.render(
            <Provider store={store}>
            <BrowserRouter>
                <Navigation>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/images" component={Images} />
                    </Switch>
                </Navigation>
                </BrowserRouter>
            </Provider>
    , document.getElementById('root'));
registerServiceWorker();
