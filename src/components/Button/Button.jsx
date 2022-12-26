import styles from './Button.module.css';

export default function Button({ toggleFollow, isFollowing }) {
  return (
    <button
      style={{ backgroundColor: isFollowing ? '#5CD3A8' : '#ebd8ff' }}
      onClick={toggleFollow}
      className={styles.button}
      type="button"
    >
      {isFollowing ? 'following' : 'follow'}
    </button>
  );
}
