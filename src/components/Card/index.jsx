import React from 'react';
import styles from './Card.module.scss';

function Card({ imgUrl, title, price, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ imgUrl, title, price });
    setIsAdded(!isAdded);
  };

  const [isLiked, setIsLiked] = React.useState(false);

  const onClickLiked = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.favorite}>
          <img
            onClick={onClickLiked}
            src={isLiked ? '/img/liked.svg' : '/img/heart.svg'}
            alt="Unliked"
          />
        </div>
        <img height={112} width={133} src={imgUrl} alt="Shoes" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена: </span>
            <b>{price} руб.</b>
          </div>
          <img
            className={styles.plus}
            onClick={onClickPlus}
            src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
            alt="Plus"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
