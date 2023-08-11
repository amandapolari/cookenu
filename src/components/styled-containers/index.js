import styled from 'styled-components';

export const CenteredPageContainer = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
`;

export const FormContainer = styled.div`
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
