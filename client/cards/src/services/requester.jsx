const requester = async (method, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            // This is not good practice and you have to fix it, but at the moment works. This append in data repeatPassword and send it to the server
            data.repeatPassword = data.password
            // This is not good practice and you have to fix it, but at the moment works. This append in data repeatPassword and send it to the server

            options.body = JSON.stringify(data);
        }
    }

    const serializedAuth = localStorage.getItem('auth');

    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth);

        if (auth.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': auth.accessToken,
            };
        }
    }

    // console.log(11111111111, options.body)
    // console.log(11111111111, data.password)
    console.log(111111, url, options)
    console.log(11111111, url, options.headers)
    
    const response = await fetch(url, options);

    if (response.status === 204) {
        return {};
    }

    if (response.status === 403) {
        window.localStorage.clear()
    }

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;

};

export const requestFactory = () => {
    return {
        get: requester.bind(null, 'GET'),
        post: requester.bind(null, 'POST'),
        put: requester.bind(null, 'PUT'),
        delete: requester.bind(null, 'DELETE'),
    }
};