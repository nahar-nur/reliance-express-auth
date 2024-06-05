import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slide1 from '../../../assets/images/banner/curgo.jpg'
import slide2 from '../../../assets/images/banner/storage.jpg'
import slide3 from '../../../assets/images/banner/truck.jpg'
import slide4 from '../../../assets/images/banner/logistic.jpg'

const Banner= () => {
    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        ...
      </Swiper>
    );
  };
  export default Banner;