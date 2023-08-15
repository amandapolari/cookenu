import { useEffect, useState } from 'react';
import { FeedContainerStyled, RecipeCardStyled } from './style';
import { ListRecipes } from '../../constants';
import { useNavigate } from 'react-router-dom';
import {
    goToRecipeDetailPage,
    goToAddRecipePage,
} from '../../routes/coordinator';
import {
    Button,
    Card,
    CardBody,
    Center,
    Heading,
    Image,
    Stack,
} from '@chakra-ui/react';
import { useProtectPage } from '../../hooks';
import { Background } from '../../components';

export const FeedPage = () => {
    const navigator = useNavigate();
    const [recipes, setRecipes] = useState([]);

    useProtectPage(navigator);

    useEffect(() => {
        ListRecipes()
            .then((data) => {
                setRecipes(data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <Background>
            <FeedContainerStyled>
                {recipes.slice(65, 71).map((recipe, i) => (
                    <RecipeCardStyled
                        onClick={() => {
                            goToRecipeDetailPage(navigator, recipe.id);
                        }}
                        key={i}
                    >
                        <Card mt="2" spacing="0" maxW="sm">
                            <CardBody>
                                <Center>
                                    <Image
                                        src={recipe.imageUrl}
                                        borderRadius="lg"
                                        h="25vh"
                                    />
                                </Center>
                                <Stack mt="6" spacing="3">
                                    <Heading size="md">
                                        {recipe.title.charAt(0).toUpperCase() +
                                            recipe.title.slice(1).toLowerCase()}
                                    </Heading>
                                </Stack>
                            </CardBody>
                        </Card>
                    </RecipeCardStyled>
                ))}
                <Button
                    variant="add"
                    onClick={() => {
                        goToAddRecipePage(navigator);
                    }}
                >
                    +
                </Button>
            </FeedContainerStyled>
        </Background>
    );
};
