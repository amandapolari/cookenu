import axios from 'axios';

// REQUESTS API COOKENU:
export const BASE_URL = 'https://api-cookenu.onrender.com';

export const Login = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/user/login`, body);
    return data;
};

export const Signup = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/user/signup`, body);
    return data;
};

export const ListRecipes = async () => {
    const { data } = await axios.get(`${BASE_URL}/recipe/all`, {
        headers: {
            Authorization: localStorage.getItem('cookenu.token'),
        },
    });
    return data;
};

export const AddRecipe = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/recipe`, body, {
        headers: {
            Authorization: localStorage.getItem('cookenu.token'),
        },
    });
    return data;
};

export const GetRecipe = async (id) => {
    const response = await axios.get(`${BASE_URL}/recipe/${id}`, {
        headers: {
            Authorization: localStorage.getItem('cookenu.token'),
        },
    });
    return response;
};

// -----------------

// VALIDATIONS REGEX:
export const validateEmail = (email) =>
    /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email);

export const validatePassword = (senha) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])(?!.*\s).{8,}$/.test(senha);

export const validateName = (name) => /.{2,}/.test(name);

export const validateTitle = (title) => /.{3,}/.test(title);

export const validateUrl = (url) => /https[s]?:\/\/[a-zA-Z]+.com/.test(url);
// -----------------
