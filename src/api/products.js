import client from './client';

export const fetchList = (offset = 0) => {
    return client.get(`/api/products?_offset=${offset}`);
};

export const fetchOne = (id = 0) => {
    return client.get(`/api/products/${id}`);
};