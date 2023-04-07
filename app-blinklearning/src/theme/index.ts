import {extendTheme} from "@chakra-ui/react";


export default extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  
    fonts: {
      heading: 'Montserrat',
      body: 'Montserrat',
    },
  
  
  colors: {
    bg:'#ffffff',
    primary: '#ED8936',
    secundary: '',
    neutral:'#787878',
    hover_active:'#DD6B20',
    hover_noactive:'#B5D5E0'
    
  },
  
});