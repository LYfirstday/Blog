// 页面导航栏
import * as React from 'react';
import './navBar.less';
import { routeList } from './../../static/ts/routeList';


export default (props: any) => {
  return (
    <nav className='nav'>
      <ul className='nav-ul'>
        {routeList.map((val, i) =>
          <li className='nav-ul-item' key={`${i}_${val.path}`}>
            <a href='javascript: void(0)' data-content='javascript'>{val.context}</a>
          </li>
        )}
      </ul>
    </nav>
  )
}
