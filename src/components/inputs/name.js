import { FormControl, Input, FormErrorMessage, Center } from '@chakra-ui/react';

export const NameInput = ({ isValid, value, onChange }) => {
    return (
        <FormControl isInvalid={!isValid}>
            <Input
                name="name"
                placeholder="Digite seu nome"
                value={value}
                onChange={onChange}
            />
            {!isValid ? (
                <Center mb="1vh">
                    <FormErrorMessage textAlign="center" as="p">
                        O nome deve ter ao menos 2 caracteres
                    </FormErrorMessage>
                </Center>
            ) : (
                ''
            )}
        </FormControl>
    );
};
