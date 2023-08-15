import { useEffect, useState } from 'react';
import { useForm } from '../../hooks';
import {
    CenteredPageContainer,
    FormContainer,
    EmailInput,
    PasswordInput,
    Background,
} from '../../components';

import { goToSignupPage, goToFeedPage } from '../../routes/coordinator';

import { Button, Center, FormLabel } from '@chakra-ui/react';
import { validateEmail, validatePassword } from '../../constants';
import { useNavigate } from 'react-router-dom';

import { Login } from '../../constants';

export const LoginPage = ({ setIsLoggedIn }) => {
    const [form, onChangeInputs, clearInputs] = useForm({
        email: '',
        senha: '',
    });

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [messagePassword, setMessagePassword] = useState();

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

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsEmailValid(validateEmail(form.email));
        setIsPasswordValid(validatePassword(form.senha));
        try {
            const { token } =
                isEmailValid &&
                isPasswordValid &&
                (await Login({
                    email: form.email,
                    password: form.senha,
                }));
            localStorage.setItem('cookenu.token', token);
            if (isEmailValid === true && isPasswordValid === true) {
                clearInputs();
            }
            setIsLoggedIn(true);
            goToFeedPage(navigator);
        } catch (e) {
            const message = e.response.data.message;
            console.log(message);
            if (message === 'Password incorreto') {
                setMessagePassword('Senha Incorreta!');
                setIsPasswordValid(false);
            }
            if (message === 'Email não cadastrado') {
                setMessagePassword(
                    'Sua senha precisa de ao menos uma letra maiúscula, uma letra minúscula, um caracter especial e um número.'
                );
                setIsPasswordValid(false);
            }
        }
    };

    return (
        <Background>
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
                            message={messagePassword}
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
        </Background>
    );
};
