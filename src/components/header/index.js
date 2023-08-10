import { HeaderStyled } from './styled';
import { Button } from '@chakra-ui/react';
import images from '../../assets/importImages';

export const Header = () => {
    return (
        <HeaderStyled>
            {/* <Button variant="header">Cookenu</Button> */}
            <Button variant="logo">
                <img alt="logo" src={images.logo} />
            </Button>
            <Button color="cinza.500" variant="header">
                Login
            </Button>
        </HeaderStyled>
    );
};
