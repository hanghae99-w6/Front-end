// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './ImageSlider.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper';

export default function ImageSlider() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        slideToClickedSlide= {true}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://w.namu.la/s/c89ca9f7e1a0524447d6d31629f031d7344b6266a6ebcbc89eaabdb48d31ac9c61df2953b2e7c15a84a52ae5a1934efb91dcd7925c42ce9d64cbcab1a437bdc1c27f9b67234ba627fe5899d13aa369d0277ded7e88dd4c3b6c3e74152bafe24a1d6d553003a9dce61be2ace88c594564" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://w.namu.la/s/4435962b2e93f4e284bb36a412158061bba6363c41fab8033c7ec0198d2caa75fe4d0a84460ddfc49d9b90ecc30f5e218d0e04ba3dfdac3cdc18e2902d60ccc16f549f49cb5a569dea7e4b9243c14c69f698df7af134e7ac57aabf8347a6bbed" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://w.namu.la/s/ecd37aaec5da564534059c34b264ddc11730adc67d05b22ae985f6eb34af6416e152c2f9cf7596ec63385255896d1c75ab30244a8b91d03abe084426777ce7dd5ed333f326341c36822b7ee5d9c2183e1ef7dde10c6327308a60018fec749b1130ec47af5f4beff348e493506aed41ab" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://w.namu.la/s/6f22a2b043766ba36420a60d95bb6e19d53b0e0bcaa3f103d8537c92e6aea963e6787d15d6c9ff82af45412bbff9fe83bda6822813b9f32db1d594dc4b9b87f72033112d80e477f88c3ba6c5d1868d14b61c18f15c0dcee29439de289a9cb94991b5c0992389802a45230c2e29846568" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://w.namu.la/s/d2f614202c59d80306a583388dcd67eaeed59c6bc09049b999972529426c3b34c22127891c5c0376bc1ae84b7a1c641da5978bf5b4c1b85d5ba69acfe8b5b8f2811df85b650d07123ed2bf0e92fadfd0bb305c3a5fec6b8347aee1b5b6157a12d77e79a184b39dd966631d3d4c68475c" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.news1.kr/system/photos/2018/11/22/3401642/article.jpg/dims/optimize" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.namu.news/file/namunews/5d/5d72b778a7b5d6768f4522af14d1c73159640bbcbc2fc9e1e9af4970bbfec3ba.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
