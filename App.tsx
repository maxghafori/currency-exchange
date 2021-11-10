import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import { HomePage } from './src/pages';
import theme from './src/theme/theme';
import { store } from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.secondaryColor }}>
          <StatusBar style="auto" />
          <HomePage />
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
}
