function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={50} height={50} src="/img/logo.png" alt="logo-store" />
          <div>
            <h3 className="text-uppercase">React Shoes</h3>
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
      <div className="content p-40">
        <h1 className="mb-40">Вся обувь</h1>
        <div className="d-flex">
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
          <div className="card">
            <img height={112} width={133} src="/img/shoes/2.jpg" alt="Shoes" />
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
          <div className="card">
            <img height={112} width={133} src="/img/shoes/3.jpg" alt="Shoes" />
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
          <div className="card">
            <img height={112} width={133} src="/img/shoes/4.jpg" alt="Shoes" />
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
      </div>
    </div>
  );
}

export default App;
