import { useState } from 'react';
import {
    FormControl,
    Input,
    FormErrorMessage,
    Button,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export const PasswordInput = ({ isValid, value, onChange }) => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    return (
        <FormControl isInvalid={!isValid}>
            <InputGroup size="md">
                <Input
                    name="senha"
                    pr="4.5rem"
                    type={show ? 'text' : 'password'}
                    placeholder="Digite sua senha"
                    value={value}
                    onChange={onChange}
                />
                <InputRightElement width="4.5rem">
                    <Button
                        id="icon"
                        bg="none"
                        _hover={{ bg: 'none' }}
                        onClick={handleClick}
                    >
                        {show ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                </InputRightElement>
            </InputGroup>
            {!isValid ? (
                <FormErrorMessage as="p">
                    Sua senha precisa de ao menos uma letra maiúscula, uma letra
                    minúscula, um caracter especial e um número.
                </FormErrorMessage>
            ) : (
                ''
            )}
        </FormControl>
    );
};
