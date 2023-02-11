import { extendTheme } from '@chakra-ui/react';
import '@fontsource/raleway/400.css'

const theme = extendTheme({
    styles : {
      global: {
        body: {
          fontFamily: 'Raleway',
          color: 'gray.800',
        },
        a : {
          textDecoration: 'none',
          color: '#E3D3C3',
          _hover: {
            textDecoration: 'none',
            color: '#E3D3C3',
          }
        }
      },
      '*' : {
        margin: 0,
        padding: 0,
      },
      Link : {
        color: '#E3D3C3',
        _hover: {
          textDecoration: 'none',
          color: '#E3D3C3',
        }
      },
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        50: '#f9fafb',
        100: '#f4f5f7',
        200: '#e5e7eb',
        300: '#d2d6dc',
        400: '#9fa6b2',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#252f3f',
    },
    brown: {
      50: '#f9fafb',
      100: '#f4f5f7',
      200: '#e5e7eb',
      300: '#d2d6dc',
      400: '#9fa6b2',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#252f3f',
    },
  }
  });

  export default theme;