import { HeaderStyled } from './styled';
import { Button } from '@chakra-ui/react';
import images from '../../assets/importImages';

export const Header = () => {
    return (
        <HeaderStyled>
            {/* <Button variant="header">Cookenu</Button> */}
            <Button variant="logo" p="5vh">
                <img alt="logo" src={images.logo} />
            </Button>
            <Button
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
