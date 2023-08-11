import { FormControl, FormErrorMessage, Textarea } from '@chakra-ui/react';

export const DescriptionTextarea = ({ isValid, value, onChange }) => {
    return (
        <FormControl isInvalid={!isValid}>
            <Textarea
                name="description"
                placeholder="Descrição"
                value={value}
                onChange={onChange}
                marginBottom="1vh"
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
