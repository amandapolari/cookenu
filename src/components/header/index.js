import { HeaderStyled } from './styled';
import { Button } from '@chakra-ui/react';
import images from '../../assets/importImages';
import { useNavigate } from 'react-router-dom';
import { goToFeedPage, goToLoginPage } from '../../routes/coordinator';
import { useEffect, useState } from 'react';

export const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigator = useNavigate();

    const [buttonText, setButtonText] = useState(
        isLoggedIn ? 'Logout' : 'Login'
    );

    useEffect(() => {
        const token = localStorage.getItem('cookenu.token');
        if (!token) {
            setButtonText('Login');
        } else {
            setButtonText('Logout');
        }
    }, [isLoggedIn]);

    const buttonAction = () => {
        if (isLoggedIn) {
            localStorage.removeItem('cookenu.token');
            setIsLoggedIn(false);
        }
        goToLoginPage(navigator);
    };

    return (
        <HeaderStyled>
            <Button
                onClick={() => {
                    goToFeedPage(navigator);
                }}
                variant="logo"
                p="5vh"
            >
                <img alt="logo" src={images.logo} />
            </Button>
            <Button
                onClick={() => {
                    buttonAction();
                }}
                p="5vh"
                fontSize="3vh"
                color="cinza.500"
                variant="link"
                _hover={{
                    textDecoration: 'underline',
                }}
            >
                {buttonText}
            </Button>
        </HeaderStyled>
    );
};
