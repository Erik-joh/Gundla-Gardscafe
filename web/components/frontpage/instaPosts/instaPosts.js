import styles from "./instaPosts.module.css";

export default function InstaPosts(props) {
  var postsSliced = props.posts.slice(0, 5);
  return (
    <div className={styles.instaPostsContainer}>
      <div className={styles.instaInfoContainer}>
        <a href="https://www.instagram.com/gundlagardscafe/ ">
          <img src={"/instaIconLarge.png"} />
          <h4>@gundlagardscafe</h4>
        </a>
      </div>
      {postsSliced.map((item) => {
        return (
          <div className={styles.instaBlock} key={item.node.id}>
            <a href="https://www.instagram.com/gundlagardscafe/ ">
              <img
                src={item.node.thumbnail_resources[4].src}
                className={styles.instaImage}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}
