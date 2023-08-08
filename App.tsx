import * as React from 'react';
import { View, Text, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Auth/Login';
import SignUp from './src/screens/Auth/SignUp';

const Stack = createNativeStackNavigator();

function App() {

  const LoginNavigationOptions = {
    title: 'Login',
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: 'bold' },
  };
  const SignUpNavigationOptions = {
    title: 'Sign up',
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: 'bold' },
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="login" component={Login} options={LoginNavigationOptions} />
          <Stack.Screen name="sign-up" component={SignUp} options={SignUpNavigationOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;