import * as React from 'react';
import './canvas.less';

export default () => {

  React.useEffect(() => {
    let canvas = document.querySelector('#canvas') as HTMLCanvasElement;
    let context = canvas.getContext('2d') as CanvasRenderingContext2D;
    let img = document.querySelector('#img') as HTMLImageElement;
    context.drawImage(img, 38, 200, 350, 350);
  }, []);

  return (
    <section className='canvas-container'>
      <img style={{height: '50px', width: '50px'}} id='img' src={require('./../../static/imgs/login-inner.png')} />
      <canvas height='736' width='414' className='canvas-container-inner' id='canvas'></canvas>
    </section>
  )
}
