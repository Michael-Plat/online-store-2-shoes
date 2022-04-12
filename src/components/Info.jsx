import React from 'react';

import { AppContext } from '../Context';

function Info({ title, image, description, altImg }) {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src={image} alt={altImg} />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="/img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
}

export default Info;
