// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './ImageSlider.css';

// Import Image
import {
  drama_1,
  drama_2,
  entertain_8,
  entertain_9,
  entertain_10,
  movie_20,
  movie_21,
} from '../../static/image/image.js';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper';
export default function ImageSlider() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
          speed: 1000,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={drama_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={drama_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={entertain_8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={entertain_9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={entertain_10} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={movie_20} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={movie_21} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
