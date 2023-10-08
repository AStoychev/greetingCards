let validateEmailAddress = (email) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email)
};

let validatePhoneNumber = (number) => {
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regex.test(number)
};

export const validateFirstName = (value) => {
    if (value.firstName.length < 2) {
        return [false, 'First name must contain at least two characters!']
    } else {
        return [true]
    }
};

export const validateLastName = (value) => {
    if (value.lastName.length < 2) {
        return [false, 'Last name must contain at least two characters!']
    } else {
        return [true]
    }
};

export const validateEmail = (value) => {
    if (!validateEmailAddress(value.email)) {
        return [false, 'Please fill a valid email address!']
    } else {
        return [true]
    }
};

export const validatePhone = (value) => {
    if (!validatePhoneNumber(value.phoneNumber)) {
        return [false, 'Please fill a valid phone number!']
    } else {
        return [true]
    }
};

export const validateShippingCompany = (value) => {
    if (value.shippingCompany === '') {
        return [false, 'Please choose shipping company!']
    } else {
        return [true]
    }
};

export const validateShippingPlace = (value) => {
    if (value.shippingPlace === '') {
        return [false, 'Please choose shipping place']
    } else {
        return [true]
    }
};

export const validateCity = (value) => {
    if (value.city.length < 2) {
        return [false, 'City must contain at least two characters!']
    } else {
        return [true]
    }
};

export const validatePostCode = (value) => {
    if (value.postCode.length < 2) {
        return [false, 'Post code must contain at least two characters!']
    } else {
        return [true]
    }
};

export const validateAddress = (value) => {
    if (value.address.length < 2) {
        return [false, 'Address must contain at least two characters!']
    } else {
        return [true]
    }
};

export const validatePayment = (value) => {
    if (value.payment === '') {
        return [false, 'Please choose payment method!']
    } else {
        return [true]
    }
};

//This function accept value from checkbox useState so I have to put this value
export const validatePrivacyPolicy = (value) => {
    if (value !== 'check') {
        return [false, 'Please choose payment method!']
    } else {
        return [true]
    }
};

export const validateAllOrder = (value, check) => {
    if
        (
        validateFirstName(value)[0] === false
        || validateLastName(value)[0] === false
        || validateEmail(value)[0] === false
        || validatePhone(value)[0] === false
        || validateShippingCompany(value)[0] === false
        || validateShippingPlace(value)[0] === false
        || validateCity(value)[0] === false
        || validatePostCode(value)[0] === false
        || validateAddress(value)[0] === false
        || validatePayment(value)[0] === false
        || validatePrivacyPolicy(check)[0] === false
    ) {
        return false
    } else {
        return true
    }
};