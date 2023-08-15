/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetRecipe } from '../../constants';
import images from '../../assets/importImages';

import { Background, CenteredPageContainer } from '../../components';
import { CenteredContainer, ImageDetails } from './styled';
import {
    Avatar,
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Center,
    Flex,
    Heading,
    IconButton,
    Spinner,
    Text,
} from '@chakra-ui/react';

export const RecipeDetailPage = () => {
    const { id } = useParams();

    const [recipe, setRecipe] = useState();

    useEffect(() => {
        GetRecipe(id)
            .then((recipe) => {
                setRecipe(recipe.data);
            })
            .catch((e) => console.log(e.response.data.message));
    }, []);

    return !recipe ? (
        <Background>
            <CenteredPageContainer>
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="laranja.500"
                    size="xl"
                />
            </CenteredPageContainer>
        </Background>
    ) : (
        <>
            <Background>
                <CenteredContainer>
                    <Center alignItems="center" justifyItems="center">
                        <Card maxW="sm">
                            <CardHeader>
                                <Flex spacing="4">
                                    <Flex
                                        flex="1"
                                        gap="4"
                                        alignItems="center"
                                        flexWrap="wrap"
                                    >
                                        <Avatar
                                            name="Segun Adebayo"
                                            src={images.user}
                                        />

                                        <Box>
                                            <Heading size="sm">
                                                @{recipe.creatorName}
                                            </Heading>
                                            <Text>{recipe.createdAt}</Text>
                                        </Box>
                                    </Flex>
                                    <IconButton
                                        variant="ghost"
                                        colorScheme="gray"
                                        aria-label="See menu"
                                    />
                                </Flex>
                            </CardHeader>
                            <Center>
                                <ImageDetails
                                    src={recipe.imageUrl}
                                />
                            </Center>
                            <Center mt="6" spacing="3">
                                <Heading size="md">
                                    {recipe.title.charAt(0).toUpperCase() +
                                        recipe.title.slice(1).toLowerCase()}
                                </Heading>
                            </Center>
                            <CardBody overflowY="auto" maxH="22vh">
                                <Text>{recipe.description}</Text>
                            </CardBody>

                            <CardFooter
                                justify="space-between"
                                flexWrap="wrap"
                                sx={{
                                    '& > button': {
                                        minW: '136px',
                                    },
                                }}
                            ></CardFooter>
                        </Card>
                    </Center>
                </CenteredContainer>
            </Background>
        </>
    );
};
