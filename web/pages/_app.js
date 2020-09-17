import "../styles/globals.css";
import "swiper/swiper.scss";
import Navigation from "swiper/components/navigation/navigation.scss";
import Pagination from "swiper/components/pagination/pagination.scss";
import Scrollbar from "swiper/components/scrollbar/scrollbar.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} {...Navigation} {...Pagination} {...Scrollbar} />
  );
}

export default MyApp;
