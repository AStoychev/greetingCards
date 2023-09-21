import { createContext, useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { cardServiceFactory } from "../services/cardService";

export const CardContext = createContext();

export const CardProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const cardService = cardServiceFactory();

    useEffect(() => {
        cardService.getAll()
            .then(result => {
                setCards(result)
            });
    }, []);

    const onCreateCardSubmit = async (data) => {
        const newCard = await cardService.create(data);
        setCards(state => [...state, newCard]);
        navigate('/catalog');
    };

    const onCardEditSubmit = async (values) => {
        const result = await cardService.edit(values._id, values);
        setCards(state => state.map(x => x._id === values._id ? result : x));
        navigate(`/catalog/${values._id}`);
    };

    const deleteCard = (cardId) => {
        setCards(state => state.filter(card => card._id !== cardId));
    };

    const getCard = (cardId) => {
        return cards.find(wall => wall._id === cardId);
    };

    const contextValues = {
        cards,
        onCreateCardSubmit,
        onCardEditSubmit,
        deleteCard,
        getCard,
    };

    return (
        <CardContext.Provider value={contextValues}>
            {children}
        </CardContext.Provider>
    );
};

export const useCardContext = () => {
    const context = useContext(CardContext);
    return context;
};