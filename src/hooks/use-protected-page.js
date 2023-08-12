import { useEffect } from 'react';
import { goToLoginPage } from '../routes/coordinator';

export const useProtectPage = (navigator) => {
    useEffect(() => {
        const token = localStorage.getItem('cookenu.token');
        if (!token) {
            goToLoginPage(navigator);
        }
    }, [navigator]);
};
