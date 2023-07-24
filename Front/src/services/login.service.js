import { userApi } from './api';
export const loginNewUser = async (email, password) => {
    const response = await userApi.post('/', { email, password });
    return response.data;
};
