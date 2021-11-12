import React, { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/redux';
import { ThemeProvider } from 'styled-components/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from 'src/theme';

const queryClient = new QueryClient();

type props=PropsWithChildren<{}>;

const WrapComponent = ({ children }:props):ReactElement => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>
  </Provider>
);

export default WrapComponent;
