// 首页最开始显示部分
import * as React from 'react';
import './IndexCom.less';
import NavBar from './../../components/navBar/navBar';

export type ThemeColorType = {
  themeColor: string,
  themeDeepColor: string
};

// 主题色
const themeColorList: ThemeColorType[] = [
  {
    themeColor: '#fed518',
    themeDeepColor: '#d4b106'
  },
  {
    themeColor: '#ff4d4f',
    themeDeepColor: '#cf1322'
  },
  {
    themeColor: '#69c0ff',
    themeDeepColor: '#096dd9'
  },
  {
    themeColor: '#9254de',
    themeDeepColor: '#531dab'
  },
  {
    themeColor: '#f759ab',
    themeDeepColor: '#eb2f96'
  },
  {
    themeColor: '#9254de',
    themeDeepColor: '#531dab'
  },
  {
    themeColor: '#2f54eb',
    themeDeepColor: '#1d39c4'
  },
  {
    themeColor: '#52c41a',
    themeDeepColor: '#237804'
  },
  {
    themeColor: '#13c2c2',
    themeDeepColor: '#006d75'
  },
  {
    themeColor: '#fa8c16',
    themeDeepColor: '#ad4e00'
  }
];

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
  }, [])

  return (
    <section className='index-container'>
      <div
        style={{...innerStyle}}
        className='index-container-inner'
      ></div>
      <NavBar />
    </section>
  )
}
