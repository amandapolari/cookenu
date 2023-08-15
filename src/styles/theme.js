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
                form: {
                    bg: 'yellow.500',
                    width: '100%',
                    _hover: {
                        bg: 'laranja.500',
                        transition: 'bg 0.3s ease-in-out',
                    },
                },
                logo: {
                    bg: 'none',
                    _hover: {
                        bg: 'none',
                    },
                },
                add: {
                    bg: 'laranja.500',
                    borderRadius: '50%',
                    fontSize: '4vh',
                    width: '3vw',
                    p: '3.5vh',
                    pb: '3.8vh',
                    position: 'fixed',
                    bottom: '3vh',
                    right: '2vh',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    _hover: {
                        // transform: 'scale(1.05)',
                        // transition: '0.5s',
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
        cinza: {
            500: '#45525B',
        },
    },
});
