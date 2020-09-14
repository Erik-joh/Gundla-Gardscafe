import urlFor from "../../imageBuilder";
import styles from "./imageCarousel.module.css";
import { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "./style.module.css";

export default function ImageCarousel(props) {
  return (
    <Carousel>
      <img src={urlFor(props.imageOne).url()} />
      <img src={urlFor(props.imageTwo).url()} />
      <img src={urlFor(props.imageThree).url()} />
    </Carousel>
  );
}
