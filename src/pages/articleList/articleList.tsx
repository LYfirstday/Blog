import * as React from 'react';
import './articleList.less';
import ArticleCard from './../../components/articleCard/articleCard';

export default() => {
  return (
    <div className='article-container'>
      <div className='article-container-title-type'>
        <div className='article-container-title-type-inner'>
          <span className='article-type-name'>Javascript</span>
          <span className='article-type-name'>Typescript</span>
          <span className='article-type-name'>HTML & CSS & CSS3</span>
          <span className='article-type-name'>React</span>
          <span className='article-type-name'>英 语</span>
        </div>
      </div>
      <section className='article'>
        <h1 className='article-type'>javascript</h1>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </section>
    </div>
  )
}
