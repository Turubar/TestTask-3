import Order from "./Order";

export default function OrdersListForm ({ ordersList, selectedOrder, onSelectOrder }){
    return (
        <div className="d-flex flex-column p-3 my-form" style={{width: "49.5%"}}>
            <div>
                <h2 className="mb-3">Список заказов ({ordersList.length})</h2>
            </div>

            <div className="col-12 d-flex flex-column my-list-order">
                {ordersList.map(order => (
                    <Order key={order.id} order={order} selectedOrder={selectedOrder} onSelectOrder={onSelectOrder} />
                ))}
            </div>
        </div>
    );
}