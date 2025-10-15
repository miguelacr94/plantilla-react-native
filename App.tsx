import React from 'react';
import { ActivityIndicator, useColorScheme } from 'react-native';
import { View, Text } from 'react-native';
import AppProvider from '@/app/AppProvider';
import { AppNavigator } from '@/navigation/AppNavigator';
import { useColorScheme as useNativeWindColorScheme } from 'nativewind';
import './global.css';
import { useAuthStore } from '@/state/useAuth';
import AuthNavigator from '@/navigation/AuthNavigatior';

export default function App() {
  const { isAuthenticated } = useAuthStore();

  // Zustand tarda un momento en rehidratar (cargar desde AsyncStorage)
  const isRehydrated = useAuthStore.persist.hasHydrated();

  if (!isRehydrated) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }
  return (
    <View className="flex-1">
      <AppProvider>
        {!isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
      </AppProvider>
    </View>
  );
}