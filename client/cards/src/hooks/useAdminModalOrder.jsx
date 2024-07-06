import { useState } from "react";

export const useAdminModalOrder = () => {
    const [userData, setUserData] = useState('');
    const [showModal, setShowModal] = useState(false);

    const showOrder = (id, firstName, lastName, order) => {
        setUserData({
            fullName: `${firstName} ${lastName}`,
            id: id,
            order: order
        })
        setShowModal(!showModal)
    };

    return {
        userData,
        showModal,
        showOrder,
    };

}