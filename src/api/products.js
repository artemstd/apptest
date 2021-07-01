import client from './client';

export const fetchList = (page = 1) => {
    return client.get(`/api/products?page=${page}`);
};

export const fetchOne = (id = 0) => {
    return client.get(`/api/products/${id}`);
};