import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, hashHistory } from 'react-router'
import routes from './routes'
import * as serviceWorker from './serviceWorker';

// 将routes单独配置
ReactDOM.render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
);

// 第二种方式
// ReactDOM.render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <Route path="about" component={About} />
//       <Route path="inbox" component={TodoList}>
        
//       </Route>
//     </Route>
//   </Router>),
//   //  <App />,
//    document.getElementById('root')
//)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
