import { userApi } from './api'



export const loginNewUser = async (email: string, password: string) => {
    
    const response = await userApi.post('/', {email, password})
    return response.data 
}


