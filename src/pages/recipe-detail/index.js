/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetRecipe } from '../../constants';
import { CenteredPageContainer } from '../../components';

export const RecipeDetailPage = () => {
    const { id } = useParams();

    const [recipe, setRecipe] = useState();

    useEffect(() => {
        GetRecipe(id)
            .then((recipe) => {
                setRecipe(recipe[0]);
            })
            .catch((e) => console.log(e.response.data.message));
    }, []);

    return !recipe ? (
        <CenteredPageContainer>
            <h1 >Não há uma descrição desta receita</h1>
        </CenteredPageContainer>
    ) : (
        <>
            <img alt="img da receita" src={recipe.imageUrl} />
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
        </>
    );
};
