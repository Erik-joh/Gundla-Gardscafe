import urlFor from "../../imageBuilder";
import { useState } from "react";

export default function ImageCarousel(props) {
  return (
    <Carousel>
      <img src={urlFor(props.imageOne).url()} />
      <img src={urlFor(props.imageTwo).url()} />
      <img src={urlFor(props.imageThree).url()} />
    </Carousel>
  );
}
