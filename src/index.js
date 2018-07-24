import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navigation from './components/navigation';
import {store} from './redux/store';
import Images from './components/images';
import Videos from './components/videos';


ReactDOM.render(<Provider store={store}>
              <BrowserRouter>
              <Switch>
                <Navigation>
                <Route exact path="/images" component={Images} />
                <Route path="/videos" component={Videos} />
                </Navigation>
              </Switch>
              </BrowserRouter>
              </Provider>, document.querySelector('.jombotrone'));
