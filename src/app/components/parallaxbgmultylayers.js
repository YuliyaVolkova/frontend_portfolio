'use strict';
///*------------------------------------------------
///* parallax background-effect - to multiple layers
///*------------------------------------------------
const parallax = (() => {
  const container = document.body.querySelector('#parallax'),
    layers = [...container.children];

  const containerPos = () => {
    //faster move the last layer 
    const speedLast = layers[layers.length-1].dataset.speed,
      positionTop = window.innerHeight/2*speedLast,
      positionLeft = window.innerWidth/2*speedLast,
      containerStyle = container.style;
    containerStyle.top = `-${positionTop}px`;
    containerStyle.bottom = `-${positionTop}px`;
    containerStyle.left = `-${positionLeft}px`;
    containerStyle.right = `-${positionLeft}px`;
  };

  const move = e => {
    const initialX = window.innerWidth/2 - e.pageX,
      initialY = window.innerHeight/2 - e.pageY;
    layers.forEach((item) => {
      let divider = item.dataset.speed,
        moveX = initialX * divider,
        moveY = initialY * divider,
        itemStyle = item.style;
      itemStyle.transform = `translate(${moveX}px, ${moveY}px)`;
      itemStyle.WebkitTransform = `translate(${moveX}px, ${moveY}px)`;
    });
  };

  const handler = () => {
    containerPos();
    window.addEventListener('resize', containerPos, false);
    window.addEventListener('mousemove', move, false);
  };
  return {handler};
})();
export default parallax;