// 页面导航栏
import * as React from 'react';
import './navBar.less';

export default (props: any) => {
  return (
    <nav className='nav'>
      <ul className='nav-ul'>
        <li className='nav-ul-item one'>
          <a href='javascript: void(0)' data-content='javascript'>javascript</a>
          </li>
        <li className='nav-ul-item'>
          <a href='javascript: void(0)' data-content='typescript'>typescript</a>
          </li>
        <li className='nav-ul-item'>
          <a href='javascript: void(0)' data-content='html & css & css3'>html & css & css3</a>
          </li>
        <li className='nav-ul-item'>
          <a href='javascript: void(0)' data-content='框架全家桶'>其他类库</a>
          </li>
      </ul>
    </nav>
  )
}
