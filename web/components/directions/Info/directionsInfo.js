import styles from "./directionsInfo.module.css";

export default function DirectionsInfo(props) {
  {
    return (
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <img src={props.image}></img>
          <h2>{props.title}</h2>
          <p>{props.subTitle}</p>
          <p>{props.info}</p>
        </div>
        <div className={styles.iframe}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.7701274440897!2d12.026426915833932!3d57.68638478111446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3e9fab7c319%3A0x881e787529cd7b7c!2sGundla%20mosse%2032%2C%20412%2076%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1600783137681!5m2!1ssv!2sse"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            width="100%"
            height="100%"
            loading="lazy"
            name="Map"
          ></iframe>
        </div>
      </div>
    );
  }
}
