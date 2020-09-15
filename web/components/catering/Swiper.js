// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import styles from "./swiper.module.css";
import "../../pages/_app";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const imageSwiper = (props) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={styles.slide}>
        <img className={styles.swipe} src={props.imageOne} />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <img className={styles.swipe} src={props.imageTwo} />
      </SwiperSlide>
      <SwiperSlide className={styles.slide}>
        <img className={styles.swipe} src={props.imageThree} />
      </SwiperSlide>
    </Swiper>
  );
};

export default imageSwiper;
