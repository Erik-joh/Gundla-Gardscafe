// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import styles from "./swiper.module.css";
import Navigation from "../../../pages/_app";
import Pagination from "../../../pages/_app";
import Scrollbar from "../../../pages/_app";
import RespPicture from "../../respPicture/respPicture";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const imageSwiper = (props) => {
  return (
    <div className={styles.div}>
      <Swiper
        spaceBetween={115}
        slidesPerView={1.3}
        navigation
        loop
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide className={styles.slide}>
          <RespPicture
            image={props.imageTwo}
            alt={props.altImageTwo}
            width={1}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <RespPicture
            image={props.imageOne}
            alt={props.altImageOne}
            width={1}
          />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <RespPicture
            image={props.imageThree}
            alt={props.altImageThree}
            width={1}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default imageSwiper;
