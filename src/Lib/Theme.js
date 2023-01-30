import { extendTheme } from '@chakra-ui/react';
import '@fontsource/raleway/400.css'

const theme = extendTheme({
    styles : {
      global: {
        body: {
          fontFamily: 'Raleway',
          color: 'gray.800',
        },
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
      a : {
        textDecoration: 'none',
        color: '#E3D3C3',
        _hover: {
          textDecoration: 'none',
          color: '#E3D3C3',
        }
      }
    }
  });

  export default theme;