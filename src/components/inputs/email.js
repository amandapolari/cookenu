import { FormControl, Input, FormErrorMessage } from '@chakra-ui/react';

export const EmailInput = ({ isValid, value, onChange }) => {
    return (
        <FormControl isInvalid={!isValid}>
            <Input
                name="email"
                placeholder="Digite seu e-mail"
                value={value}
                onChange={onChange}
            />
            {!isValid ? (
                <FormErrorMessage as="p">
                    Por favor, digite um e-mail válido
                </FormErrorMessage>
            ) : (
                ''
            )}
        </FormControl>
    );
};
