import React from 'react';
import RegisterScreen from '@/features/auth/screens/RegisterScreen';
import { LoginScreen } from '@/features/auth/screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
