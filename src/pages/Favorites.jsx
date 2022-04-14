import React from 'react';

import Card from '../components/Card';
import { AppContext } from '../Context';
import CarouselCompound from '../components/carousel-compound';

import styles from './Carousel.module.scss';

function Favorites() {
  const { favorites, onAddFavorites } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className={styles.mainContainer}>
        <CarouselCompound infinite>
          <CarouselCompound.Page>
            <img className={styles.imgSlider} src="img/Sale-Slider/sale-slider-3.jpg" />
          </CarouselCompound.Page>
          <CarouselCompound.Page>
            <img className={styles.imgSlider} src="img/Slider-Shoes/slider-2.jpg" />
          </CarouselCompound.Page>
          <CarouselCompound.Page>
            <img className={styles.imgSlider} src="img/Slider-Shoes/slider-3.jpg" />
          </CarouselCompound.Page>
        </CarouselCompound>
      </div>
      <div className="d-flex align-center justify-between mb-40 p-15">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((item) => (
          <Card key={item.id} favorited onFavorite={onAddFavorites} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
