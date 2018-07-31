import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navigation from './containers/LayOut/navigation';
import {store} from './redux/store';
import Images from './containers/ImageAndVideo/images';
import Videos from './containers/ImageAndVideo/videos';
import Home from './containers/Home/Home'


ReactDOM.render(<Provider store={store}>
              <BrowserRouter>
              <Switch>
                <Navigation>
                <Route exact path="/" component={Home} />
                <Route path="/images" component={Images} />
                <Route path="/videos" component={Videos} />
                </Navigation>
              </Switch>
              </BrowserRouter>
              </Provider>, document.querySelector('.jombotrone'));
