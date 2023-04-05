import {extendTheme, theme} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

export default extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    bg:'#ffffff',
    primary: '#739F07',
    secundary: '',
    neutral:'#787878'
    
  },
  components: {
    Button: {
      baseStyle: {
        borderLeftRadius: 9999,
        borderRightRadius: 9999,
        fontWeight: "bold",
      },
      sizes: {
        lg: {
          paddingY: 3,
          fontSize: "md",
        },
      },
    },
  },
});