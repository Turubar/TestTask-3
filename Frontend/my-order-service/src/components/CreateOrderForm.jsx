import { Button, Input} from "@chakra-ui/react";
import { useState } from "react";
import { createOrder } from "../services/orders";

export default function CreateOrderForm({ addNewOrder }) {
    const [message, setMessage] = useState("");

    const [senderCity, setSenderCity] = useState("");
    const [senderAddress, setSenderAddress] = useState("");

    const [recipientCity, setRecipientCity] = useState("");
    const [recipientAddress, setRecipientAddress] = useState("");

    const [weight, setWeight] = useState("");
    const [dateDispatch, setDateDispatch] = useState();

    function dateDispatchHandler(e) {
        const dateUTC = new Date(e.target.value) + ":00Z";
        setDateDispatch(new Date(dateUTC).toISOString());
    }

    async function submitOrderForm (e) {
        try {
            e.preventDefault();
            const response = await createOrder({senderCity, senderAddress, recipientCity, recipientAddress, weight, dateDispatch});

            if (response.status == 200) {
                const newOrder = response.data;
                addNewOrder(newOrder);

                setSenderCity("");
                setSenderAddress("");
                setRecipientCity("");
                setRecipientAddress("");
                setWeight("");
                document.getElementById("dateInput").value = "";
            }
            else {
                setMessage("Не удалось добавить заказ!")
                setTimeout(clearMessage, 2000);
            }
        }
        catch (ex) {
            setMessage("Не удалось добавить заказ!")
            setTimeout(clearMessage, 2000);
            console.log(ex.response.status);
        }
    }

    function clearMessage() {
        setMessage("");
    }

    return (
        <form className="d-flex flex-column p-3 my-form" style={{width: "49.5%"}}>
            <div className="d-flex flex-row justify-content-between align-items-center mb-3">
                <h2 className="mb-0">Создание заказа</h2>
                <h5 className="mb-0" style={{color: "red"}}>{message}</h5>
            </div>

            <div className="d-flex flex-row justify-content-between mb-3">
                <div className="col-5">
                    <Input placeholder="Город отправителя" value={senderCity} onChange={(e) => setSenderCity(e.target.value)} />
                </div>

                <div className="col-5">
                    <Input placeholder="Адрес отправителя" value={senderAddress} onChange={(e) => setSenderAddress(e.target.value)}/>
                </div>
            </div>

            <div className="d-flex flex-row justify-content-between mb-3">
                <div className="col-5">
                    <Input placeholder="Город получателя" value={recipientCity} onChange={(e) => setRecipientCity(e.target.value)} />
                </div>

                <div className="col-5">
                    <Input placeholder="Адрес получателя" value={recipientAddress} onChange={(e) => setRecipientAddress(e.target.value)} />
                </div>
            </div>

            <div className="d-flex flex-row justify-content-between mb-4">
                <div className="col-5">
                    <Input type="number" step="0.01" placeholder="Вес груза (кг)" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>

                <div className="col-5">
                    <Input id="dateInput" type="datetime-local" placeholder="Дата забора груза" onChange={(e) => dateDispatchHandler(e)} />
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <Button className="col-5" type="submit" colorScheme='teal' onClick={submitOrderForm}>Создать заказ</Button>
            </div>

        </form>
    );
}