import * as React from 'react';
import './home.less';
import IndexCom from './IndexCom';
import ArticleListCom from './../../components/articleListCom/articleListCom';

export default () => {

  return (
    <>
      <IndexCom />
      <section className='main-article-list'>
        <div className='main-article-list-inner'>
          <div className='main-article-list-bacColor'></div>
          <ArticleListCom/>
          <ArticleListCom/>
          <ArticleListCom/>
          <ArticleListCom/>
        </div>
      </section>
    </>
  )
}
