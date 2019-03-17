// 首页最开始显示部分
import * as React from 'react';
import './IndexCom.less';
import NavBar from './../../components/navBar/navBar';
import {themeColorList} from './../../static/ts/routeList';
import SelfInfo from './../../components/selfInfo/selfInfo';
import LatestArticleCom from './latestArticleCom';

export default (props: any) => {

  const [innerStyle, setInnerStyle] = React.useState({
    right: '30%',
    transform: 'rotate(-40deg)'
  });

  React.useEffect(() => {
    let right: string;
    let rotate: string;
    // 计算白色背景旋转角度和right值
    while (true) {
      let rightValue = Math.floor(Math.random() * 10);
      let rotateValue = Math.floor(Math.random() * 10);
      let themeColorValue = Math.floor(Math.random() * 10);
      let documentElement = document.body;
      if (rightValue >=2 && rightValue <= 6 && rotateValue >=2 && rotateValue <= 3.5) {
        right = `${rightValue}0%`;
        rotate = `rotate(-${rotateValue}0deg)`;
        setInnerStyle({right: right, transform: rotate});
        documentElement.style.setProperty('--themeColor', themeColorList[themeColorValue].themeLightColor);
        documentElement.style.setProperty('--navBarDeepColor', themeColorList[themeColorValue].themeDeepColor);
        break;
      }
    }

    // 如果设置duration，会出现index界面合不住bug
    document.addEventListener('scroll', throttle(documentListener, 0), false);

    return () => {
      document.removeEventListener('scroll', throttle(documentListener, 0), false);
    }
  }, [])

  const [sectionHeight, setSectionHeight] = React.useState(0);

  function documentListener() {
    let documentScrollTop: number;
    // 兼容ie ,opera浏览器
    if (document.documentElement.scrollTop > 0) {
      documentScrollTop = document.documentElement.scrollTop;
    } else {
      documentScrollTop = document.body.scrollTop;
    }
    setSectionHeight(documentScrollTop);
  }

  // 函数节流
  function throttle(fn: Function, duration: number) {
    let begin: any = new Date();
    return function() {
      let end: any = new Date(),args = arguments;
      if (end - begin >= duration) {
        fn.apply(throttle, args);
        begin = end;
      }
    }
  }

  return (
    <section style={{height: `calc(100vh - ${sectionHeight}px)`}} className='index-container' id='index'>
      <div
        style={{...innerStyle}}
        className='index-container-inner'
      ></div>
      <NavBar />
      <SelfInfo />
      <LatestArticleCom />
    </section>
  )
}
