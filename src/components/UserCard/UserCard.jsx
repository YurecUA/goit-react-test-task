import UserInfo from 'components/UserInfo/UserInfo';
import Decorations from 'components/Decorations/Decorations';
import Button from 'components/Button/Button';
import logo from '../../images/logo.png';
import styles from './UserCard.module.css';
import {
  setToLocalStorage,
  getFromLocalStorage,
} from '../../utils/LocalStorage';
import { useState, useEffect } from 'react';

export const UserCard = ({ user, tweets, followers, avatar, cardId }) => {
  const [isFollowing, setisFollowing] = useState(
    getFromLocalStorage(cardId) ?? false
  );
  const toggleFollow = () => {
    setisFollowing(!isFollowing);
  };

  useEffect(() => {
    setToLocalStorage(cardId, isFollowing);
  }, [isFollowing, cardId]);

  return (
    <li className={styles.usercard}>
      <img className={styles.logo} src={logo} alt="GO IT Logo" />
      <Decorations avatar={avatar} user={user} />
      <UserInfo
        tweets={tweets}
        followers={followers}
        isFollowing={isFollowing}
      />
      <Button toggleFollow={toggleFollow} isFollowing={isFollowing} />
    </li>
  );
};
