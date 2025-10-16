import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { loginSchema } from '../validations/loginschema';
import { useAuthStore } from '@/state/useAuth';

export const LoginForm = () => {
  const { login } = useAuthStore();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        login({ email: values.email, password: values.password, id: '', name: '' });
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View className="p-6">
          <Text className="text-xl font-bold mb-4">Iniciar sesión</Text>
          
          <View className="mb-4">
            <Text className="mb-2 text-red-400">Email</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded"
              placeholder="Ingresa tu email"
              value={values.email}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && touched.email && (
              <Text className="text-red-500 text-sm">{errors.email}</Text>
            )}
          </View>

          <View className="mb-6">
            <Text className="mb-2">Contraseña</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded"
              placeholder="Ingresa tu contraseña"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
            />
            {errors.password && touched.password && (
              <Text className="text-red-500 text-sm">{errors.password}</Text>
            )}
          </View>

          <TouchableOpacity
            className="bg-blue-500 py-3 rounded-lg mb-4"
            onPress={() => handleSubmit()}
          >
            <Text className="text-white text-center font-bold">Iniciar sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className="text-blue-500 text-center">¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default LoginForm;
