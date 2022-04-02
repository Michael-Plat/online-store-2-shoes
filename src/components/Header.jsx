import React from 'react';

function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={50} height={50} src="/img/logo.png" alt="logo-store" />
        <div>
          <h3 className="text-uppercase">Fire Shoes</h3>
          <p className="opacity-5">Магазин лучшей обуви</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={20} height={20} src="/img/cart.png" alt="img-cart" />
          <span>1205 руб.</span>
        </li>
        <li>
          <img width={20} height={20} src="/img/user.png" alt="img-user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
