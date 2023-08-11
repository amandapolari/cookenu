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

export const Header = () => {
    const navigator = useNavigate();
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
                    goToLoginPage(navigator);
                }}
                p="5vh"
                fontSize="3vh"
                color="cinza.500"
                variant="link"
                _hover={{
                    textDecoration: 'underline',
                }}
            >
                Login
            </Button>
        </HeaderStyled>
    );
};
