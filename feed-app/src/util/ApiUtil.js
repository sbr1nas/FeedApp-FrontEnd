import { API_BASE_URL, ACCESS_TOKEN } from "../common/constants";
import axios from "axios";
const frameToken = (token) => 'Bearer ${token}';

export const loginApi = async (username, password) => {
    let response = undefined; 
    try {
        const url = `${API_BASE_URL}/user/login`;
        const apiResponse = await axios.post(url, { username, password });
            if(apiResponse.status === 200){
                response = apiResponse.data;
            }
    } catch (e){
        console.log(e); 
    } finally {
        return response; 
    }
};

export const signUpApi = async (
    username,
    name,
    emailId,
    phone, 
    password
) => {
    let response = undefined; 
    try{
        const url = `${API_BASE_URL}/user/signup`;
        const apiResponse = await axios.post(url, {
            username,
            name,
            emailId,
            phone,
            password
        });
        if (apiResponse.status === 200){
            response = apiResponse.data; 
        }
    } catch (e) {
        console.log(e); 
    } finally {
        return response; 
    }
};