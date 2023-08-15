import { FormControl, Input, FormErrorMessage, Center } from '@chakra-ui/react';

export const EmailInput = ({ isValid, value, onChange, message }) => {
    return (
        <FormControl isInvalid={!isValid}>
            <Input
                name="email"
                placeholder="Digite seu e-mail"
                value={value}
                onChange={onChange}
            />
            {!isValid ? (
                <Center>
                    <FormErrorMessage as="p">
                        {message
                            ? message
                            : 'Por favor, digite um e-mail válido'}
                    </FormErrorMessage>
                </Center>
            ) : (
                ''
            )}
        </FormControl>
    );
};
