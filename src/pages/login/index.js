import { useEffect, useState } from 'react';
import { useForm } from '../../hooks';
import {
    CenteredPageContainer,
    FormContainer,
    EmailInput,
    PasswordInput,
} from '../../components';

import {
    goToSignupPage,
    // goToFeedPage,
    // goToLoginPage,
    // goToAddRecipePage,
    // goToRecipeDetailPage,
    // goToSignupPage,
} from '../../routes/coordinator';

import { Button, Center, FormLabel } from '@chakra-ui/react';
import { validateEmail, validatePassword } from '../../constants';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const [form, onChangeInputs, clearInputs] = useForm({
        email: '',
        senha: '',
    });

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const navigator = useNavigate();

    useEffect(() => {
        if (form.email) {
            setIsEmailValid(validateEmail(form.email));
        }
    }, [form.email]);

    useEffect(() => {
        if (form.senha) {
            setIsPasswordValid(validatePassword(form.senha));
        }
    }, [form.senha]);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        setIsEmailValid(validateEmail(form.email));
        setIsPasswordValid(validatePassword(form.senha));
        if (isEmailValid === true && isPasswordValid === true) {
            clearInputs();
        }
    };

    return (
        <CenteredPageContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <Center>
                        <FormLabel
                            fontFamily="Lobster, cursive"
                            fontSize="3em"
                            color="cinza.500"
                            direction="collumn"
                        >
                            Login{' '}
                        </FormLabel>
                    </Center>
                    <EmailInput
                        value={form.email}
                        onChange={onChangeInputs}
                        isValid={isEmailValid}
                    />
                    <PasswordInput
                        value={form.senha}
                        onChange={onChangeInputs}
                        isValid={isPasswordValid}
                    />

                    <Button color="cinza.500" type="submit" variant="form">
                        Enviar
                    </Button>
                    <Center>
                        <Button
                            onClick={() => {
                                goToSignupPage(navigator);
                            }}
                            variant="link"
                            color="yellow.500"
                            _hover={{
                                color: 'laranja.500',
                                transition: 'background 0.3s ease-in-out',
                                textDecoration: 'underline',
                            }}
                        >
                            Não tem cadastro? Cadastre-se!
                        </Button>
                    </Center>
                </form>
            </FormContainer>
        </CenteredPageContainer>
    );
};
