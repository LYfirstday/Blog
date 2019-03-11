// 自己信息
import * as React from 'react';
import './selfInfo.less';

export default () => {
  return (
    <div className='self-info'>
      <div className='self-info-list'>
        <p>邮箱：Ly.firstday@outLook.com</p>
        <a className='go-to-github' href='https://github.com/LYfirstday' target='_blank'>
          github:&nbsp;<img src={require('./../../static/imgs/github.png')} />
        </a>
      </div>
      <div className='self-info-img'></div>
    </div>
  )
}
