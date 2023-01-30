import { extendTheme } from '@chakra-ui/react';
import '@fontsource/raleway/400.css'

const theme = extendTheme({
    fonts: {
      heading: "Open Sans, sans-serif",
      body : "'Raleway', sans-serif",
      text:  "Raleway, sans-serif"
    },
    Link : {
      baseStyle: {
        color: '#fff',
        _hover: {
          color: '#E3D3C3',
          borderBottom: '5px solid #E3D3C3'
      }
      }
  },
  });

  export default theme;