// 首页最开始显示部分
import * as React from 'react';
import './IndexCom.less';
import NavBar from './../../components/navBar/navBar';
import {themeColorList} from './../../static/ts/routeList';
import SelfInfo from './../../components/selfInfo/selfInfo';

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
      if (rightValue >=2 && rightValue <= 6 && rotateValue >=2 && rotateValue <= 3.5) {
        right = `${rightValue}0%`;
        rotate = `rotate(-${rotateValue}0deg)`;
        setInnerStyle({right: right, transform: rotate});
        document.documentElement.style.setProperty('--themeColor', themeColorList[themeColorValue].themeColor);
        document.documentElement.style.setProperty('--navBarDeepColor', themeColorList[themeColorValue].themeDeepColor);
        break;
      }
    }

    document.addEventListener('scroll', throttle(documentListener, 0), false);

    return () => {
      document.removeEventListener('scroll', throttle(documentListener, 0), false);
    }
  }, [])

  function documentListener() {
    setSectionHeight(document.documentElement.scrollTop);
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

  const [sectionHeight, setSectionHeight] = React.useState(0);

  return (
    <section style={{height: `calc(100vh - ${sectionHeight}px)`}} className='index-container' id='index'>
      <div
        style={{...innerStyle}}
        className='index-container-inner'
      ></div>
      <NavBar />
      <SelfInfo />
    </section>
  )
}
