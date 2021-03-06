import React from 'react';
import ContentLoader from 'react-content-loader';

import { AppContext } from '../../Context';

import styles from './Card.module.scss';

function Card({ id, imgUrl, title, price, onPlus, onFavorite, favorited = false, loading }) {
  const { isItemAdded } = React.useContext(AppContext);
  const obj = { id, parentId: id, imgUrl, title, price };

  const onClickPlus = () => {
    onPlus(obj);
  };

  const [isLiked, setIsLiked] = React.useState(favorited);

  const onClickLiked = () => {
    onFavorite(obj);
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
          {onFavorite && (
            <div className={styles.favorite}>
              <img
                onClick={onClickLiked}
                src={
                  isLiked
                    ? 'https://github.com/Michael-Plat/online-store-2-shoes/blob/gh-pages/img/liked.svg?raw=true'
                    : 'https://github.com/Michael-Plat/online-store-2-shoes/blob/gh-pages/img/unliked.svg?raw=true'
                }
                alt="Unliked"
              />
            </div>
          )}
          <img height={135} width="100%" src={imgUrl} alt="Shoes" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена: </span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(id)
                    ? 'https://github.com/Michael-Plat/online-store-2-shoes/blob/gh-pages/img/btn-checked.svg?raw=true'
                    : 'https://github.com/Michael-Plat/online-store-2-shoes/blob/gh-pages/img/btn-plus.svg?raw=true'
                }
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
