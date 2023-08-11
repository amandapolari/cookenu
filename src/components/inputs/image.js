import { FormControl, Input, FormErrorMessage } from '@chakra-ui/react';

export const ImageInput = ({ isValid, value, onChange }) => {
    return (
        <FormControl isInvalid={!isValid}>
            <Input
                name="image"
                placeholder="Link da Imagem"
                value={value}
                onChange={onChange}
            />
            {!isValid ? (
                <FormErrorMessage as="p">
                    Verifique se a url está correta
                </FormErrorMessage>
            ) : (
                ''
            )}
        </FormControl>
    );
};
