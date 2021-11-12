import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HomePage } from './src/pages';
import { theme } from './src/theme';
import { store } from './src/redux';

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.secondaryColor }}>
            <HomePage />
          </SafeAreaView>
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
}
