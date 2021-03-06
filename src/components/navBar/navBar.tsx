// 页面导航栏
import * as React from 'react';
import './navBar.less';
import { routeList } from './../../static/ts/routeList';
import { withRouter } from 'react-router';


const NavBar = (props: any) => {

  function onNavClick(path: string) {
    props.history.push(path);
  }

  return (
    <nav className='nav'>
      <ul className='nav-ul'>
        {routeList.map((val, i) =>
          <li
            className='nav-ul-item'
            key={`${i}_${val.path}`}
            onClick={() => onNavClick(val.path)}
          >
            <a href='javascript: void(0)' data-content='javascript'>{val.context}</a>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default withRouter(NavBar)
