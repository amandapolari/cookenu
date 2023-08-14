import styled from 'styled-components';

export const FeedContainerStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 80vw;
    justify-items: center;
    grid-gap: 2vh 0;
    padding: 2vh;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

export const RecipeCardStyled = styled.div`
    /* border: 2px solid black; */
    width: 20vw;
    transition: 0.5s;
    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`;

export const ImgRecipe = styled.img`
    padding: 1vh;
    height: 35vh;
    border-radius: 10px;
`;
