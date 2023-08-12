import { useEffect, useState } from 'react';
import { useForm, useProtectPage } from '../../hooks';
import {
    CenteredPageContainer,
    FormContainer,
    DescriptionTextarea,
    ImageInput,
    TitleInput,
} from '../../components';

import { Button, Center, FormLabel } from '@chakra-ui/react';
import { AddRecipe, validateTitle, validateUrl } from '../../constants';
import { goToFeedPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';

export const AddRecipePage = () => {
    const [form, onChangeInputs, clearInputs] = useForm({
        description: '',
        title: '',
        image: '',
    });

    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isUrlValid, setIsUrlValid] = useState(true);

    const navigator = useNavigate();

    useProtectPage(navigator);

    useEffect(() => {
        if (form.title) {
            setIsTitleValid(validateTitle(form.title));
        }
    }, [form.title]);

    useEffect(() => {
        if (form.image) {
            setIsUrlValid(validateUrl(form.image));
        }
    }, [form.image]);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isUrlValid && isTitleValid) {
                await AddRecipe({
                    title: form.title,
                    description: form.description,
                    imageUrl: form.image,
                });
                alert('Receita cadastrada com sucesso!');
                clearInputs();
                goToFeedPage(navigator);
            }
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    return (
        <CenteredPageContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    <Center>
                        <FormLabel
                            fontFamily="Lobster, cursive"
                            fontSize="1.8em"
                            color="cinza.500"
                            direction="collumn"
                        >
                            Adicionar Nova Receita
                        </FormLabel>
                    </Center>
                    <TitleInput
                        value={form.title}
                        onChange={onChangeInputs}
                        isValid={isTitleValid}
                    />
                    <DescriptionTextarea
                        value={form.description}
                        onChange={onChangeInputs}
                        isValid={true}
                    />
                    <ImageInput
                        value={form.image}
                        onChange={onChangeInputs}
                        isValid={isUrlValid}
                    />
                    <Button color="cinza.500" type="submit" variant="form">
                        Adicionar
                    </Button>
                </form>
            </FormContainer>
        </CenteredPageContainer>
    );
};
