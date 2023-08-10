import styled from 'styled-components';

export const LoginPageContainer = styled.div`
    height: 90vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgrey;
`;

export const FormContainer = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    input, p {
        margin-bottom: 10px;
    }
`;
