import styles from "./imageBlock.module.css";

import RespPicture from "../../respPicture/respPicture";

export default function ImageBlock({ image, alt, width }) {
  return (
    <div className={styles.imageBlock} style={{ width: width }}>
      <RespPicture image={image} alt={alt} />
    </div>
  );
}
