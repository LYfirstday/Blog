import * as React from 'react';
import './home.less';
import IndexCom from './IndexCom';
import ArticleCard from '../../components/articleCard/articleCard';

export default () => {

  return (
    <>
      <IndexCom />
      <section className='main-article-list'>
        <div className='main-article-list-inner'>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </section>
    </>
  )
}
