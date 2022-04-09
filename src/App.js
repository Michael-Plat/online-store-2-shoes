import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import AppContext from './Context';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get('https://624c6477e80949c269701781.mockapi.io/cart');
      const favoritesResponse = await axios.get(
        'https://624c6477e80949c269701781.mockapi.io/favorites',
      );
      const itemsResponse = await axios.get('https://624c6477e80949c269701781.mockapi.io/items');

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        axios.delete(`https://624c6477e80949c269701781.mockapi.io/cart/${obj.id}`);
      } else {
        const { data } = await axios.post('https://624c6477e80949c269701781.mockapi.io/cart', obj);

        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину покупки');
    }
  };

  const onCartDelete = (id) => {
    axios.delete(`https://624c6477e80949c269701781.mockapi.io/cart/${id}`);

    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://624c6477e80949c269701781.mockapi.io/favorites/${obj.id}`);

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
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddFavorites,
        setCartOpened,
        setCartItems,
      }}>
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            onCartDelete={onCartDelete}
            items={cartItems}
            onClose={() => setCartOpened(false)}
          />
        )}

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            exact
            path="/"
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
          <Route exact path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}
export default App;
