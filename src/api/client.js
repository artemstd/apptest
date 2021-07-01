const apiUrl = 'https://react-test-starwars.vercel.app';

const client = async (url, { method = 'GET', body, ...otherConfig } = {}) => {
    const config = {
        ...otherConfig,
        method,
        headers: {
            'Content-Type': 'application/json',
            ...otherConfig.headers
        }
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    let resp, data;
    try {
        resp = await fetch(apiUrl + url, config);
        data = await resp.json();
        if (resp.ok) {
            return data;
        }
        throw new Error(resp.statusText)
    } catch(exception) {
        return Promise.reject(data || exception.message);
    }
};

client.get = (url, config = {}) => {
    return client(url, {...config, method: 'GET'});
};

client.post = (url, body, config = {}) => {
    return client(url, {...config, method: 'POST', body});
};

export default client;