import { useEffect, useState } from 'react';
import { FeedContainerStyled, ImgRecipe, RecipeCardStyled } from './style';
import { ListRecipes } from '../../constants';
import { useNavigate } from 'react-router-dom';
import {
    goToRecipeDetailPage,
    goToAddRecipePage,
} from '../../routes/coordinator';
import { Button } from '@chakra-ui/react';

export const FeedPage = () => {
    const navigator = useNavigate();
    const [recipes, setRecipes] = useState([]);

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
        <FeedContainerStyled>
            {/* {recipes.slice(-50).map((recipe, i) => ( */}
            {recipes.slice(0, 9).map((recipe, i) => (
                <RecipeCardStyled
                    onClick={() => {
                        goToRecipeDetailPage(navigator, recipe.id);
                    }}
                    key={i}
                >
                    <ImgRecipe
                        alt="imagem da receita"
                        src={recipe.imageUrl}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://picsum.photos/seed/${i}/200/200`;
                        }}
                    />
                    <h3>{recipe.title}</h3>
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
    );
};
