require('../styles/base.scss');

(function(){
  console.log(111);
  console.log(222);
  const imgSrc = require('../images/timg.jpg');
  document.body.querySelector('.cover').src = imgSrc;
})();
