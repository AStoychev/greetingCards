import { useState } from 'react';

import { deleteAllDataPurchaseAfterSendOrder } from '../functions/localStorageFunction/deleteAllDataPurchaseAfterSendOrder';
import { validateOrder } from '../functions/validateOrder';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));

    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);

        setValues(initialValues);

        if (validateOrder(values)) {
            deleteAllDataPurchaseAfterSendOrder();
        }

    };

    const changeValues = (newValues) => {
        // This is for destructuring array with additionalValue and send to editCard page for update information
        const [additionalImageOne, additionalImageTwo, additionalImageThree, additionalImageFour] = newValues.additionalImage
        newValues['additionalImageOne'] = additionalImageOne
        newValues['additionalImageTwo'] = additionalImageTwo
        newValues['additionalImageThree'] = additionalImageThree
        newValues['additionalImageFour'] = additionalImageFour

        setValues(newValues);
    }

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues,
    };
};