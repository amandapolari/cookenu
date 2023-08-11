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

// -----------------

// VALIDATIONS REGEX:
export const validateEmail = (email) =>
    /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email);

export const validatePassword = (senha) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])(?!.*\s).{8,}$/.test(senha);

export const validateName = (name) => /.{2,}/.test(name);
// -----------------
