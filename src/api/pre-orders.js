import client from './client';

export const create = (data = {}) => {
    return client.post('/api/pre-orders', data);
};