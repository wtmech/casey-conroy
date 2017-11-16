import React from 'react';
import Swiper from 'react-id-swiper';
import '../../node_modules/swiper/dist/css/swiper.min.css';

class Media extends React.Component {
  render() {
    const params = {
      paginationClickable: true,
      slidesPerView: 4,
      spaceBetween: 2,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return (
    <Swiper {...params}>
      <div className="img1"></div>
      <div className="img2"></div>
      <div className="img3"></div>
      <div className="img4"></div>
      <div className="img5"></div>
      <div className="img6"></div>
    </Swiper>
    )
  }
}
 
export default Media;