// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import styles from "./swiper.module.css";
import Navigation from "../../../pages/_app";
import Pagination from "../../../pages/_app";
import Scrollbar from "../../../pages/_app";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const imageSwiper = (props) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
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
