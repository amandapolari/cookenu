/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetRecipe } from '../../constants';
import images from '../../assets/importImages';

import { CenteredPageContainer, Loading } from '../../components';
import {
    CenteredContainer,
    ContainerDescription,
    Description,
    Image,
    ImageContainer,
    Title,
} from './styled';
import { Button } from '@chakra-ui/react';

export const RecipeDetailPage = () => {
    const { id } = useParams();

    const [recipe, setRecipe] = useState();

    useEffect(() => {
        GetRecipe(id)
            .then((recipe) => {
                // console.log(recipe);
                setRecipe(recipe.data);
            })
            .catch((e) => console.log(e.response.data.message));
    }, []);

    const i = Math.floor(Math.random() * 1000) + 1;

    return !recipe ? (
        <CenteredPageContainer>
            <Button isLoading colorScheme="none" variant="solid">
                Email
            </Button>
        </CenteredPageContainer>
    ) : (
        <>
            <CenteredContainer>
                <ImageContainer>
                    <Image
                        alt="img da receita"
                        src={recipe.imageUrl}
                        onError={(e) => {
                            e.target.onerror = null;
                            // e.target.src = `https://picsum.photos/seed/${i}/200/200`;
                            e.target.src = images.genericImage;
                        }}
                    />
                </ImageContainer>
                <Title>{recipe.title}</Title>
                <ContainerDescription>
                    <Description>{recipe.description}</Description>
                </ContainerDescription>
            </CenteredContainer>
        </>
    );
};
