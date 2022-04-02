import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
  const onClickButton = () => {
    alert(123);
  };
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.favorite}>
          <img src="/img/heart.svg" alt="Unliked" />
        </div>
        <img height={112} width={133} src={props.imgUrl} alt="Shoes" />
        <h5>{props.title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена: </span>
            <b>{props.price} руб.</b>
          </div>
          <button className="button" onClick={onClickButton}>
            <img height={17} width={17} src="/img/btn-plus.svg" alt="Plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
