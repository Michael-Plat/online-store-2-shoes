import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from './hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart(); // custom hook

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to={'./'}>
        <div className="d-flex align-center">
          <img width={50} height={50} src="/img/logo.jpg" alt="logo-store" />
          <div>
            <h3 className="text-uppercase">Fire Shoes</h3>
            <p className="opacity-5">Магазин лучшей обуви</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={20} height={20} src="/img/cart.png" alt="Card" />
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="mr-30 cu-p"
              vwidth={20}
              height={20}
              src="/img/heart.svg"
              alt="Favorites"
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={20} height={20} src="/img/user.png" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
