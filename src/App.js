import React from 'react';

import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid suede',
    price: 17000,
    img: '/img/shoes/1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 15000,
    img: '/img/shoes/2.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid suede',
    price: 14000,
    img: '/img/shoes/3.jpg',
  },
  {
    title: 'Мужские Кроссовки Puma X Aka Future Rider',
    price: 16000,
    img: '/img/shoes/4.jpg',
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Вся обувь</h1>
          <div className="serch-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск ..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card key={obj.id} title={obj.title} price={obj.price} imgUrl={obj.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
