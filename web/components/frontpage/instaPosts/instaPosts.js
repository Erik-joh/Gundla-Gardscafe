import styles from "./instaPosts.module.css";

export default function InstaPosts(props) {
  var postsSliced = props.posts.slice(0, 5);
  return (
    <div className={styles.instaPostsContainer}>
      <div className={styles.instaInfoContainer}>
        <img src={"/instaIconLarge.png"} />
        <h4>@gundlagardscafe</h4>
      </div>
      {postsSliced.map((item) => {
        return (
          <div className={styles.instaBlock} key={item.node.id}>
            <img
              src={item.node.thumbnail_resources[4].src}
              className={styles.instaImage}
            />
          </div>
        );
      })}
    </div>
  );
}
