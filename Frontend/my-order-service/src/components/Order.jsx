export default function Order ({ order, selectedOrder, onSelectOrder}) {
    function dateHandler(isoDate) {
        const date = new Date(isoDate);

        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = date.getUTCFullYear();
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');

        const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
        return formattedDate;
    }

    function onClick(order) {
        if (selectedOrder != null) {
            if (selectedOrder.id == order.id) onSelectOrder(null);
            else onSelectOrder(order);
        }
        else onSelectOrder(order);
    }

    return (
        <div className="col-12 d-flex flex-row justify-content-between align-items-center p-2 mb-2 my-order" onClick={() => onClick(order)}>
            <h4 style={{marginBottom: "0"}}>Заказ №{order.id}</h4>
            <h4 style={{marginBottom: "0"}}>{dateHandler(order.dateDispatch)}</h4>
        </div>
    );
}