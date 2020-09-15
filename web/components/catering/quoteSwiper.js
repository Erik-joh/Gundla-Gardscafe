// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import styles from "./quoteSwiper.module.css";

SwiperCore.use([Navigation, Pagination]);

const quoteSwiper = (props) => {
  return (
    <div className={styles.div}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <p>{props.quoteOne}</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>{props.quoteTwo}</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>{props.quoteThree}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default quoteSwiper;
