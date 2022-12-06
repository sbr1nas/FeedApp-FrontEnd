import { API_BASE_URL, ACCESS_TOKEN } from "../common/constants";
import axios from "axios";
//const frameToken = (token) => 'Bearer ${token}';

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

export const getFeedsApi = async (token, excludeUsername) => {
    let response = undefined; 
    try{
        const url = `${API_BASE_URL}/Posts`;
        const apiResponse = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}` },
            params: { excludeUsername }, 
        });
        if (apiResponse.status === 200) {
            response = apiResponse.data; 
        }
    } catch (err) {
        console.log(err);
    } finally {
        return response; 
    };
};

export const addFeedApi = async (token, username, post, imageUrl) => {
    let response = undefined; 
    try{
        const url = `${API_BASE_URL}/Posts/username/${username}`;
        const apiResponse = await axios.post(url, { post, imageUrl }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (apiResponse === 200) {
            response = apiResponse.data; 
        }
    } catch (err) {
        console.log(err); 
    } finally {
        return response; 
    }
};

export const getMyFeedsApi = async (token, username) => {
    let response = undefined; 
    try {
        const url = `${API_BASE_URL}/Posts/userName/${username}`;
        const apiResponse = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}`},
        });
        if (apiResponse.status === 200) {
            response = apiResponse.data;
        }
    } catch (err) {
        console.log(err);
    } finally {
        return response; 
    }
};

