import { requestFactory } from "./requester";

const baseUrl = process.env.REACT_APP_BASE_URL_CARD_SERVICE;

export const cardServiceFactory = (token) => {

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