import React from 'react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import store from './store';
import RoutesApp  from './routes/index';

import theme from './theme';

const App = () => {
  

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <RoutesApp />
      </ChakraProvider>
    </Provider>
  );
};

export default App;
