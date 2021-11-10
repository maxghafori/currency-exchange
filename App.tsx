import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { HomePage } from './src/pages/home';
import theme from './src/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar style="auto" />
        <HomePage />
      </SafeAreaView>
    </ThemeProvider>
  );
}
