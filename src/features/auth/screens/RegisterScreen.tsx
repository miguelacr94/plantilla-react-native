import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../navigation/AppNavigator'

type Nav = NativeStackNavigationProp<RootStackParamList, 'Register'>;

const RegisterScreen = () => {
     const navigation = useNavigation<Nav>();
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl font-bold text-primary mb-6">Bienvenido 👋</Text>

      <Pressable
        className="bg-primary px-4 py-2 rounded-xl"
        onPress={() => navigation.navigate('Home')}
      >
        <Text className="text-black font-semibold text-lg">Entrar</Text>
      </Pressable>
    </View>
  )
}

export default RegisterScreen