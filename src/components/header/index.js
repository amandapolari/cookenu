import { HeaderStyled } from './styled';
import { Button } from '@chakra-ui/react';
import images from '../../assets/importImages';
import { useNavigate } from 'react-router-dom';
import {
    goToFeedPage,
    goToLoginPage,
    // goToAddRecipePage,
    // goToRecipeDetailPage,
    // goToSignupPage,
} from '../../routes/coordinator';

export const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigator = useNavigate();

    const buttonAction = () => {
        if (isLoggedIn) {
            localStorage.removeItem('cookenu.token');
            setIsLoggedIn(false);
        }
        goToLoginPage(navigator);
    };
    const buttonText = isLoggedIn ? 'Logout' : 'Login';

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
