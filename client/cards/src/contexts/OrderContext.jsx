import { createContext, useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import {orderServiceFactory} from '../services/orderService'

export const OrderContext = createContext();

export const OrderProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const orderService = orderServiceFactory();

    useEffect(() => {
        orderService.getAll()
            .then(result => {
                setOrders(result)
            });
    }, []);

    const onCreateOrderSubmit = async (data) => {
        const newOrder = await orderService.create(data);
        setOrders(state => [...state, newOrder]);
        navigate('/catalog');
    };

    const onOrderEditSubmit = async (values) => {
        const result = await orderService.changeStatusOrder(values._id, values);
        setOrders(state => state.map(x => x._id === values._id ? result : x));
    };

    const contextValues = {
        orders,
        onCreateOrderSubmit,
        onOrderEditSubmit,
    };

    return (
        <OrderContext.Provider value={contextValues}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrderContext = () => {
    const context = useContext(OrderContext);
    return context;
};