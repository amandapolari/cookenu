import { useEffect, useState } from 'react';
import { useForm } from '../../hooks';
import { LoginPageContainer, FormContainer } from './styled';

import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Button,
    InputGroup,
    InputRightElement,
    Center,
} from '@chakra-ui/react';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const LoginPage = () => {
    const [form, onChangeInputs, clearInputs] = useForm({
        email: '',
        senha: '',
    });

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [messageEmail, setMessageEmail] = useState('');
    const [messagePassword, setMessagePassword] = useState('');

    useEffect(() => {
        if (form.email || form.senha) {
            if (form.senha === '') {
                setIsEmailValid(
                    /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email)
                );
                setMessageEmail('Por favor, digite um e-mail válido');
            }
            if (form.senha !== '') {
                setIsPasswordValid(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])(?!.*\s).{8,}$/.test(
                        form.senha
                    )
                );
                setMessagePassword(
                    'Sua senha precisa de ao menos uma letra maiúscula, uma letra minúscula, um caracter especial e um número.'
                );
            }
        }
    }, [form.email, form.senha]);

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);

        setIsEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email));
        setMessageEmail('Por favor, digite um e-mail válido');
        setIsPasswordValid(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])(?!.*\s).{8,}$/.test(
                form.senha
            )
        );
        setMessagePassword(
            'Sua senha precisa de ao menos uma letra maiúscula, uma letra minúscula, um caracter especial e um número.'
        );
        if (isEmailValid === true && isPasswordValid === true) {
            clearInputs();
        }
    };

    return (
        <LoginPageContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <FormControl isInvalid={!isEmailValid}>
                        <Center>
                            <FormLabel>LOGIN</FormLabel>
                        </Center>
                        <Input
                            name="email"
                            placeholder="Digite seu e-mail"
                            value={form.email}
                            onChange={onChangeInputs}
                        />
                        {!isEmailValid ? (
                            <FormErrorMessage as="p">
                                {messageEmail}
                            </FormErrorMessage>
                        ) : (
                            ''
                        )}
                    </FormControl>
                    <FormControl isInvalid={!isPasswordValid}>
                        <InputGroup size="md">
                            <Input
                                name="senha"
                                pr="4.5rem"
                                type={show ? 'text' : 'password'}
                                placeholder="Digite sua senha"
                                value={form.senha}
                                onChange={onChangeInputs}
                            />
                            <InputRightElement width="4.5rem">
                                <Button
                                    bg="none"
                                    _hover={{ bg: 'none' }}
                                    h="1.75rem"
                                    size="sm"
                                    onClick={handleClick}
                                >
                                    {show ? <FaEyeSlash /> : <FaEye />}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {!isPasswordValid ? (
                            <FormErrorMessage as="p">
                                {messagePassword}
                            </FormErrorMessage>
                        ) : (
                            ''
                        )}
                    </FormControl>
                    <Button type="submit" variant="form">
                        Enviar
                    </Button>
                </form>
            </FormContainer>
        </LoginPageContainer>
    );
};
