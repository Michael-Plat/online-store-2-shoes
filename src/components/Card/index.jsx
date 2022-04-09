import React from 'react';

import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';
import AppContext from '../../Context';

function Card({ id, imgUrl, title, price, onPlus, favorited = false, loading }) {
  const { isItemAdded, onAddFavorites } = React.useContext(AppContext);

  const onClickPlus = () => {
    onPlus({ id, imgUrl, title, price });
  };

  const [isLiked, setIsLiked] = React.useState(favorited);

  const onClickLiked = () => {
    onAddFavorites({ id, imgUrl, title, price });
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={265}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="169" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="190" rx="5" ry="5" width="100" height="15" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
          <rect x="4" y="234" rx="5" ry="5" width="80" height="25" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            <img
              onClick={onClickLiked}
              src={isLiked ? '/img/liked.svg' : '/img/unliked.svg'}
              alt="Unliked"
            />
          </div>
          <img height={135} width="100%" src={imgUrl} alt="Shoes" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>{price} руб.</b>
            </div>
            <img
              className={styles.plus}
              onClick={onClickPlus}
              src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
