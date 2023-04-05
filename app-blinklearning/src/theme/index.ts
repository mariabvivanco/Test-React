import {extendTheme, theme} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

export default extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
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