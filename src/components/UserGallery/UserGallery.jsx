import React from 'react';
import { UserCard } from 'components/UserCard/UserCard';
import users from '../../data/users.json';
import styles from './UserGallery.module.css';

export default function UserGallery() {
  return (
    <ul className={styles.gallery}>
      {users.map(({ id, avatar, tweets, followers, user }) => (
        <UserCard
          key={id}
          avatar={avatar}
          tweets={tweets}
          followers={followers}
          user={user}
          cardId={id}
        />
      ))}
    </ul>
  );
}
