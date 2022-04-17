import React from 'react';
import axios from 'axios';

import Card from '../components/Card';

export function Orders() {
  const [orders, setOrders] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // asynchronous request with a self-calling function
    (async () => {
      try {
        const { data } = await axios.get('https://624c6477e80949c269701781.mockapi.io/orders');
        // setOrders(data.map((obj) => obj.items).flat()); // alternative way
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе покупок :(');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы!</h1>
      </div>
      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}
