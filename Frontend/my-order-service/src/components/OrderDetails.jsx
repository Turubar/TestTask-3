import { Input } from "@chakra-ui/react";

export default function OrderDetails({order}) {
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

    return (
        <div className="col-12 my-order-details p-3">
            <h3>Подробная информация о заказе №{order.id}</h3>

            <div className="col-12 d-flex flex-row justify-content-between mb-3">
                <div className="col-3">
                    <label className="my-label">Город отправителя</label>
                    <Input readOnly value={order.senderCity} />
                </div>
                <div className="col-3">
                    <label className="my-label">Адрес отправителя</label>
                    <Input readOnly value={order.senderAddress} />
                </div>
                <div className="col-3">
                    <label className="my-label">Вес груза (кг)</label>
                    <Input readOnly value={order.weight} />
                </div>
            </div>

            <div className="col-12 d-flex flex-row justify-content-between">
                <div className="col-3">
                    <label className="my-label">Город получателя</label>
                    <Input readOnly value={order.recipientCity} />
                </div>
                <div className="col-3">
                    <label className="my-label">Адрес получателя</label>
                    <Input readOnly value={order.recipientAddress} />
                </div>
                <div className="col-3">
                    <label className="my-label">Дата забора</label>
                    <Input readOnly value={dateHandler(order.dateDispatch)} />
                </div>
            </div>
        </div>
    );
}