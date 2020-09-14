import urlFor from "../../imageBuilder";
import "../../styles/image-gallery.module.css";
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

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
