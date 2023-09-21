import { requestFactory } from "./requester";

const baseUrl = `http://localhost:3030/cards`

export const cardServiceFactory = (token) => {

    // let data = localStorage.getItem('auth')
    // let dataToken = JSON.parse(data)
    // let accessToken = dataToken['accessToken']
    // console.log(1111111111, accessToken)
    // token = accessToken

    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(`${baseUrl}/all-cards`);
        const cards = Object.values(result);
        return cards;
    };

    const getOne = async (cardId) => {
        const result = await request.get(`${baseUrl}/${cardId}`);
        return result;
    };

    const create = async (cardData) => {
        const result = await request.post(`${baseUrl}/add-card`, cardData);
        return result;
    };

    const edit = (cardId, data) => request.put(`${baseUrl}/${cardId}/edit`, data);

    const deleteCard = (cardId) => request.delete(`${baseUrl}/${cardId}/delete`);

    return {
        getAll,
        getOne,
        create,
        edit,
        deleteCard,
    };
}