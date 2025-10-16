import { View } from 'react-native';
import { LoginForm } from '../components/LoginForm';

export const LoginScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <LoginForm />
    </View>
  );
};
