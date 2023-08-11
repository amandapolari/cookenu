import { useEffect, useState } from 'react';
import { useForm } from '../../hooks';
import {
    CenteredPageContainer,
    FormContainer,
    EmailInput,
    PasswordInput,
    NameInput,
} from '../../components';

import { Button, Center, FormLabel } from '@chakra-ui/react';
import { validateEmail, validatePassword, validateName } from '../../constants';

export const SignupPage = () => {
    const [form, onChangeInputs, clearInputs] = useForm({
        email: '',
        senha: '',
        name: '',
    });

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);

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

    useEffect(() => {
        if (form.name) {
            setIsNameValid(validateName(form.name));
        }
    }, [form.name]);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        setIsEmailValid(validateEmail(form.email));
        setIsPasswordValid(validatePassword(form.senha));
        setIsNameValid(validateName(form.name));
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
                            SignUp{' '}
                        </FormLabel>
                    </Center>
                    <NameInput
                        value={form.name}
                        onChange={onChangeInputs}
                        isValid={isNameValid}
                    />
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
                        Cadastrar
                    </Button>
                </form>
            </FormContainer>
        </CenteredPageContainer>
    );
};
