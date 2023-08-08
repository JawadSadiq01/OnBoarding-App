import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Auth/Login';
import SignUp from './src/screens/Auth/SignUp';
import Dashboard from './src/screens/Home/Dashboard';
import WelcomeScreen from './src/screens/Welcome/WelcomeScreen';

const Stack = createNativeStackNavigator();

function App() {

  const WelcomeNavigationOptions = {
    title: 'Welcome',
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: 'bold' },
  };
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
          <Stack.Screen name="welcome" component={WelcomeScreen} options={WelcomeNavigationOptions} />
          <Stack.Screen name="login" component={Login} options={LoginNavigationOptions} />
          <Stack.Screen name="sign-up" component={SignUp} options={SignUpNavigationOptions} />
          <Stack.Screen name="dashboard" component={Dashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;