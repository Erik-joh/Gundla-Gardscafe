// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "./swiper.module.scss";
import "./swiperNavigation.module.scss";
import "./swiperPagination.module.scss";
import "./swiperScrollbar.module.scss";
import styles from "./swiper.module.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Swipers = (props) => {
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
      <SwiperSlide>
        <img className={styles.testers} src={props.imageOne} />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.testers} src={props.imageTwo} />
      </SwiperSlide>
      <SwiperSlide>
        <img className={styles.testers} src={props.imageThree} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipers;
