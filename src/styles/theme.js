import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    components: {
        Button: {
            variants: {
                header: {
                    _hover: {
                        bg: 'yellow.500',
                        transition: 'bg 0.3s ease-in-out',
                    },
                },
            },
        },
    },
    colors: {
        laranja: {
            500: '#FE7E02',
        },
        yellow: {
            500: '#f9b24e',
        },
    },
});
