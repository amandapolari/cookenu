import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetRecipe } from '../../constants';

export const RecipeDetailPage = () => {
    const { id } = useParams();
    console.log('id url', id);

    const [recipe, setRecipe] = useState();

    useEffect(() => {
        GetRecipe(id)
            .then((recipe) => {
                setRecipe(recipe[0]);
            })
            .catch((e) => console.log(e.response.data.message));
    }, []);

    return !recipe ? (
        <h1>Não há receitas com esse id</h1>
    ) : (
        <>
            <img alt="img da receita" src={recipe.imageUrl} />
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
        </>
    );
};
