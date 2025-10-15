import React, { useActionState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useAuthStore } from '@/state/useAuth';

export const HomeScreen = () => {
  const { isAuthenticated, logout, user } = useAuthStore();
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl text-dark font-medium">{isAuthenticated ? `Bienvenido ${user?.name}` : 'No autenticado'}</Text>
      <Pressable
        className="bg-primary px-4 py-2 rounded-xl"
        onPress={() => logout()}
      >
        <Text className="text-black font-semibold text-lg">Cerrar sesión</Text>
      </Pressable>
    </View>
  );
};
