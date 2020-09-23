import styles from "./imageBlock.module.css";

import RespPicture from "../../respPicture/respPicture";

export default function ImageBlock({ image, alt, width, imageWidth }) {
  return (
    <div className={styles.imageBlock} style={{ width: width }}>
      <RespPicture image={image} alt={alt} width={imageWidth} />
    </div>
  );
}
