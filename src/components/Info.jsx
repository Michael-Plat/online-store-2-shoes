import React from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../Context';

function Info({ title, image, description, altImg }) {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src={image} alt={altImg} />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <Link to={'/'}>
        <button onClick={() => setCartOpened(false)} className="greenButton">
          <img
            src="https://github.com/Michael-Plat/online-store-2-shoes/blob/gh-pages/img/arrow.svg?raw=true"
            alt="Arrow"
          />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
}

export default Info;
