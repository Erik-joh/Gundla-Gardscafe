// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import styles from "./quoteSwiper.module.css";

SwiperCore.use([Navigation, Pagination]);

const quoteSwiper = (props) => {
  return (
    <div className={styles.div}>
      <img src="quote.png"></img>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <p>{props.quoteOne}</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>{props.quoteTwo}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default quoteSwiper;
