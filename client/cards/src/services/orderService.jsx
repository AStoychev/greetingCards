import { requestFactory } from "./requester";

const baseUrl = process.env.REACT_APP_BASE_URL_ORDER_SERVICE;

export const orderServiceFactory = (token) => {

    // let data = localStorage.getItem('auth')
    // let dataToken = JSON.parse(data)
    // let accessToken = dataToken['accessToken']
    // console.log(1111111111, accessToken)
    // token = accessToken

    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(`${baseUrl}/get-all-order`);
        const orders = Object.values(result);
        return orders;
    };

    const getOne = async (orderId) => {
        const result = await request.get(`${baseUrl}/${orderId}`);
        return result;
    };

    const create = async (orderData) => {
        const result = await request.post(`${baseUrl}/make-order`, orderData);
        return result;
    };

    const changeStatusOrder = async (orderId, data) => {
        const result = await request.put(`${baseUrl}/${orderId}/change-status`, data);
    };

    // const edit = (orderId, data) => request.put(`${baseUrl}/${orderId}/edit`, data);

    // const deleteCard = (orderId) => request.delete(`${baseUrl}/${orderId}/delete`);

    return {
        getAll,
        getOne,
        create,
        changeStatusOrder,
        // edit,
        // deleteCard,
    };
}