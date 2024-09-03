import axios from "axios";

export const createOrder = async (order) => {
    try {
        var response  = await axios.post("http://localhost:5062/api/orders/create", order);
        return response;
    }
    catch (e) {
        console.log(e);
    }
}

export const getOrders = async () => {
    try {
        var response  = await axios.get("http://localhost:5062/api/orders/get");
        return response;
    }
    catch (e) {
        console.log(e);
    }
}
