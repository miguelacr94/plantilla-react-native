import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useAuthStore } from '@/state/useAuth';
export const LoginScreen = () => {
const {login, } = useAuthStore();


  const handleLogin = () => {
    // En una app real, aquí llamarías a tu API y recibirías el usuario
    const mockUser = {
      id: "1",
      name: "Miguel Contreras",
      email: "miguel@example.com",
    };
    login(mockUser);
  };
  return (
    <View className="flex-1 items-center justify-center bg-background ">
      <Text className="text-2xl font-bold text-red-500 mb-6">Bienvenido 👋</Text>

      <Pressable
        className="bg-primary px-4 py-2 rounded-xl"
        onPress={() => handleLogin()}
      >
        <Text className="text-black font-semibold text-lg">Entrar</Text>
      </Pressable>
    </View>
  );
};
