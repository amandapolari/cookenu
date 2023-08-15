import styled from 'styled-components';
import images from '../../assets/importImages';

export const Background = styled.div`
    background-image: url(${images.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 90vh;
`;

export const CenteredPageContainer = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.div`
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    input,
    p,
    button {
        margin-bottom: 10px;
    }
    #icon {
        margin-bottom: 0;
    }
    @media (max-width: 600px) {
        width: auto;
        min-width: 40vw;
        max-width: 90vw;
    }
`;
