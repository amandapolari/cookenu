import styled from 'styled-components';

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
`;

export const Image = styled.img`
    height: 40vh;
    @media (max-width: 600px) {
        width: auto;
        min-width: 40vw;
        max-width: 90vw;
    }
`;

export const CenteredContainer = styled.div`
    height: 90vh;
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
    padding: 3vh 30vh;
`;

export const Description = styled.p`
    font-size: 2.5vh;
    padding: 2vh;
`;

export const ContainerDescription = styled.div`
    overflow-y: auto;
    height: 30vh;
`;

export const Title = styled.h1`
    text-align: center;
    font-weight: 700;
    font-size: 4vh;
`;
