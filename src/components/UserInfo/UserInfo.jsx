import styles from './UserInfo.module.css';
import addCommaToNumber from 'utils/AddCommaToNumber';

export default function UserInfo({ tweets, followers, isFollowing }) {
  return (
    <div className={styles.userInfo}>
      <p>{tweets}</p>
      <p>
        {isFollowing
          ? addCommaToNumber(followers + 1)
          : addCommaToNumber(followers)}
      </p>
    </div>
  );
}
