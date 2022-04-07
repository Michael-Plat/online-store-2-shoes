import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    // fetch('https://624c6477e80949c269701781.mockapi.io/items')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });

    axios.get('https://624c6477e80949c269701781.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://624c6477e80949c269701781.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://624c6477e80949c269701781.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://624c6477e80949c269701781.mockapi.io/cart', obj);

    setCartItems((prev) => [...prev, obj]);
  };

  const onCartDelete = (id) => {
    axios.delete(`https://624c6477e80949c269701781.mockapi.io/cart/${id}`);

    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddFavorites = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://624c6477e80949c269701781.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
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

  return (
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
              onAddToCart={onAddToCart}
              onAddFavorites={onAddFavorites}
              onChangeSearchInput={onChangeSearchInput}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
            />
          }
        />
        <Route
          exact
          path="/favorites"
          element={<Favorites items={favorites} onAddFavorites={onAddFavorites} />}
        />
      </Routes>
    </div>
  );
}
export default App;
