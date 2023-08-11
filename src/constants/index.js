export const BASE_URL = 'https://api-cookenu.onrender.com';

export const validateEmail = (email) =>
    /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email);

export const validatePassword = (senha) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])(?!.*\s).{8,}$/.test(senha);

export const validateName = (name) => /.{2,}/.test(name);
