import * as React from 'react';
import './articleCard.less';
import Tag from './../../components/tag/tag';

export default () => {
  return (
    <>
      <div className='article-list'>
        <div className='article-list-bac'></div>
        <div className='article-list-header'>
          <div className='article-list-header-title'>
            <h3>阿斯达岁的阿萨德</h3>
            <span>1991-02-02</span>
          </div>
          <p className='line-bac'></p>
        </div>
        <div className='article-list-description'>
        阿斯达萨大所大神大神大神大神阿斯达萨大所大神大神大神大神阿斯达萨大所大神大神大神大神阿斯达萨大所大神大神大神大神阿斯达萨大所大神大神大神大神阿斯达萨大所大神大神大神大神阿斯达萨大所大神大神大神大神阿斯达萨大所大神大神大神大神阿斯达萨大所大神大神大神大神阿斯达萨大所大神大神大神大神阿斯达萨大所大神大神大神大神阿斯达萨大所大神大神大神大神阿斯达萨大所大神大神大神大神阿斯达萨大所大神大神大神大神阿斯达萨大所大神大神大神大神
        </div>
        <p className='line-bac'></p>
        <div className='article-list-footer'>
          <div className='leave-message'>
            <img src={require('./../../static/imgs/leave-message.png')} />
            <span>32</span>
          </div>
          <div className='tag'>
            <img src={require('./../../static/imgs/tag.png')} />
            <Tag />
            <Tag />
          </div>
        </div>
      </div>
    </>
  )
}
