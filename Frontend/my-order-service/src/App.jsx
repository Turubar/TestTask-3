import './App.css'
import CreateOrderForm from './components/CreateOrderForm'
import OrdersListForm from './components/OrdersListForm'

import { useEffect, useState } from 'react';
import { getOrders } from './services/orders';
import OrderDetails from './components/OrderDetails';

function App() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOrders();
        setOrders(response.data);

      } catch (error) {
            console.error('Ошибка при получении данных:', error);
      }
    };
    fetchData();
  }, []);

  const addNewOrder = (newOrder) => {
    setOrders(prevOrders => [...prevOrders, newOrder]);
  };

  return (
    <>
      <div className='d-flex flex-row justify-content-between m-3'>
        <CreateOrderForm addNewOrder={addNewOrder}/>
        <OrdersListForm ordersList={orders} selectedOrder={selectedOrder} onSelectOrder={setSelectedOrder}/>
      </div>

      {selectedOrder != null &&
        <div className='d-flex flex-row justify-content-between m-3'>
          <OrderDetails order={selectedOrder} />
        </div>
      }
    </>
  )
}

export default App
