// src/features/auth/components/LoginForm.tsx
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
  import { loginSchema } from '../validations/loginschema';
import { useAuthStore } from '@/state/useAuth';

export default function LoginForm() {
  const { login } = useAuthStore();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={() => {
        login({email: '', password: '', id: '', name: '',}); // simula autenticación
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View className="p-6">
          <Text className="text-xl font-bold mb-4">Iniciar sesión</Text>

          <TextInput
            placeholder="Correo electrónico"
            value={values.email}
            onChangeText={handleChange('email')}
            className="border border-gray-300 rounded-xl p-3 mb-2"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {touched.email && errors.email && (
            <Text className="text-red-500 text-sm">{errors.email}</Text>
          )}

          <TextInput
            placeholder="Contraseña"
            value={values.password}
            onChangeText={handleChange('password')}
            className="border border-gray-300 rounded-xl p-3 mt-3 mb-2"
            secureTextEntry
          />
          {touched.password && errors.password && (
            <Text className="text-red-500 text-sm">{errors.password}</Text>
          )}

          <TouchableOpacity
            onPress={() => handleSubmit()}
            className="bg-blue-600 py-3 rounded-xl mt-5"
          >
            <Text className="text-center text-white font-semibold">
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}
