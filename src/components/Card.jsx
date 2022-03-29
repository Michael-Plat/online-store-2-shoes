import React from 'react';

const Card = () => {
  return (
    <div>
      <div className="card">
        <img height={112} width={133} src="/img/shoes/1.jpg" alt="Shoes" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена: </span>
            <b>17 000 руб.</b>
          </div>
          <button className="button">
            <img height={11} width={11} src="/img/btn-plus.svg" alt="Plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
