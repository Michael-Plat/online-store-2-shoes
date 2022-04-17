import React from 'react';

import Card from '../components/Card';
import { AppContext } from '../Context';
import CarouselCompound from '../components/carousel-compound';

import styles from './Carousel.module.scss';
import Info from '../components/Info';

function Favorites() {
  const { favorites, onAddFavorites } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className={styles.mainContainer}>
        <CarouselCompound infinite>
          <CarouselCompound.Page>
            <img
              className={styles.imgSlider}
              src="img/Sale-Slider/sale-slider-3.jpg"
              alt="Slider"
            />
          </CarouselCompound.Page>
          <CarouselCompound.Page>
            <img className={styles.imgSlider} src="img/Slider-Shoes/slider-2.jpg" alt="Slider" />
          </CarouselCompound.Page>
          <CarouselCompound.Page>
            <img className={styles.imgSlider} src="img/Slider-Shoes/slider-3.jpg" alt="Slider" />
          </CarouselCompound.Page>
        </CarouselCompound>
      </div>
      <div className="d-flex align-center justify-between mb-40 p-20">
        <h1>Мои закладки</h1>
      </div>
      {favorites.length > 0 ? (
        <div className="d-flex flex-wrap">
          {favorites.map((item) => (
            <Card key={item.id} favorited onFavorite={onAddFavorites} {...item} />
          ))}
        </div>
      ) : (
        <div className="m-50 p-50">
          <Info
            title={'У вас нет закладок ;('}
            description={'Лайкните одну из пар Fire обуви :)'}
            image={'img/Smiles/smile-like.jpg'}
            altImg={'Smile'}
          />
        </div>
      )}
    </div>
  );
}

export default Favorites;
