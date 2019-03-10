import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './static/less/page.less';
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Loading from './components/loading/loading';
import * as Loadable from 'react-loadable';

const Home = Loadable({
  loader: () => import('./pages/home/home'),
  loading: Loading,
  timeout: 8000
});

const Index = () => {

  return (
    <HashRouter> 
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/' render={ () => {return <Redirect to='/home'/>} }/>
      </Switch>
    </HashRouter>
  )
}

ReactDOM.render(
  <Index />,
  document.querySelector('#root')
)
