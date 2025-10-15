import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '@/features/tasks/screens/HomeScreen'
import { RootStackParamList } from './AppNavigator';

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
      options={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator