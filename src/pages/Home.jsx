import React from 'react';

import Card from '../components/Card';
import CarouselCompound from '../components/carousel-compound';

import styles from './Carousel.module.scss';

function Home({
  items,
  onAddToCart,
  onAddFavorites,
  onChangeSearchInput,
  setSearchValue,
  searchValue,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );

    return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddFavorites(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <div className="content p-40">
      <div className={styles.mainContainer}>
        <CarouselCompound infinite imdex>
          <CarouselCompound.Page>
            <img
              className={styles.imgSlider}
              src="https://github.com/Michael-Plat/online-store-2-shoes/blob/gh-pages/img/Slider-Shoes/slider-1.jpg?raw=true"
              alt="Slider"
            />
          </CarouselCompound.Page>
          <CarouselCompound.Page>
            <img
              className={styles.imgSlider}
              src="https://github.com/Michael-Plat/online-store-2-shoes/blob/gh-pages/img/Sale-Slider/sale-slider-1.jpg?raw=true"
              alt="Slider"
            />
          </CarouselCompound.Page>
          <CarouselCompound.Page>
            <img
              className={styles.imgSlider}
              src="https://github.com/Michael-Plat/online-store-2-shoes/blob/gh-pages/img/Sale-Slider/sale-slider-2.jpg?raw=true"
              alt="Slider"
            />
          </CarouselCompound.Page>
        </CarouselCompound>
      </div>
      <div className="d-flex align-center justify-between mb-40 p-20">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Вся Fire обувь'} </h1>
        <div className="search-block d-flex">
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="clear cu-p"
              src="https://github.com/Michael-Plat/online-store-2-shoes/blob/gh-pages/img/btn-remove.svg?raw=true"
              alt="Clear"
            />
          )}
          <img
            src="https://github.com/Michael-Plat/online-store-2-shoes/blob/gh-pages/img/search.svg?raw=true"
            alt="Search"
          />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск ..."
            maxLength={35}
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
