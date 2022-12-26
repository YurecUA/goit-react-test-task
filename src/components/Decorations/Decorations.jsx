import React from 'react';
import styles from './Decorations.module.css';
import ellipse from '../../images/ellipse.png';

export default function Decorations({ avatar, user }) {
  return (
    <>
      <span className={styles.horizontalLine}></span>
      <img className={styles.circleBorder} src={ellipse} alt="Ellipse" />
      <div className={styles.circleBg}>
        <img src={avatar} alt={user} width="72" />
      </div>
    </>
  );
}
