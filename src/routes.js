import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './components/post_index';

const Greeting = () => {
  return <div>Hey baby!</div>;
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex}/>
    <Route path="greet" component={Greeting}/>
  </Route>
);