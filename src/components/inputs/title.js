import { FormControl, Input, FormErrorMessage } from '@chakra-ui/react';

export const TitleInput = ({ isValid, value, onChange }) => {
    return (
        <FormControl isInvalid={!isValid}>
            <Input
                name="title"
                placeholder="Título"
                value={value}
                onChange={onChange}
            />
            {!isValid ? (
                <FormErrorMessage as="p">
                    O título deve ter ao menos 2 caracteres
                </FormErrorMessage>
            ) : (
                ''
            )}
        </FormControl>
    );
};
