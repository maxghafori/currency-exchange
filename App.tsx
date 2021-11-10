import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { HomePage } from './src/pages';
import theme from './src/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.secondaryColor }}>
        <StatusBar style="auto" />
        <HomePage />
      </SafeAreaView>
    </ThemeProvider>
  );
}
