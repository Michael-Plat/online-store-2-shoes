import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { AppContext } from './Context';
import { Orders } from './pages/Orders';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // asynchronous request documentation react
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('https://624c6477e80949c269701781.mockapi.io/cart'),
          axios.get('https://624c6477e80949c269701781.mockapi.io/favorites'),
          axios.get('https://624c6477e80949c269701781.mockapi.io/items'),
        ]);

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных ;(');
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://624c6477e80949c269701781.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://624c6477e80949c269701781.mockapi.io/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Не удалось добавить в корзину покупки');
      console.error(error);
    }
  };

  const onCartDelete = async (id) => {
    try {
      await axios.delete(`https://624c6477e80949c269701781.mockapi.io/cart/${id}`);

      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert('Не удалось удалить товар :(');
      console.error(error);
    }
  };

  const onAddFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        await axios.delete(`https://624c6477e80949c269701781.mockapi.io/favorites/${obj.id}`);

        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post(
          'https://624c6477e80949c269701781.mockapi.io/favorites',
          obj,
        );

        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в закладки');
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        onAddToCart,
        favorites,
        isItemAdded,
        onAddFavorites,
        setCartOpened,
        setCartItems,
      }}>
      <div className="wrapper clear">
        <Drawer
          onCartDelete={onCartDelete}
          items={cartItems}
          onClose={() => setCartOpened(false)}
          opened={cartOpened}
        />
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            exact
            path=""
            element={
              <Home
                items={items}
                cartItems={cartItems}
                onAddToCart={onAddToCart}
                onAddFavorites={onAddFavorites}
                onChangeSearchInput={onChangeSearchInput}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                isLoading={isLoading}
              />
            }
          />
          <Route exact path="favorites" element={<Favorites />} />

          <Route exact path="orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}
export default App;
