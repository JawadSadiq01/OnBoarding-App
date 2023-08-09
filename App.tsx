import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Auth/Login';
import SignUp from './src/screens/Auth/SignUp';
import Dashboard from './src/screens/Home/Dashboard';
import WelcomeScreen from './src/screens/Welcome/WelcomeScreen';
import NetInfo from '@react-native-community/netinfo';
import Loader from './src/helpers/loader';

const Stack = createNativeStackNavigator();

function App() {
  const [isConnected, setIsConnected] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const WelcomeNavigationOptions = {
    title: 'Welcome',
    headerTitleAlign: 'center',
    headerTitleStyle: { fontWeight: 'bold' },
    headerLeft: () => (<></>),
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
      {isConnected === true ?
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="home" component={Dashboard} options={{ headerShown: false }} />
            <Stack.Screen name="welcome" component={WelcomeScreen} options={WelcomeNavigationOptions} />
            <Stack.Screen name="login" component={Login} options={LoginNavigationOptions} />
            <Stack.Screen name="sign-up" component={SignUp} options={SignUpNavigationOptions} />
          </Stack.Navigator>
        </NavigationContainer>
        : isConnected === false ?
          <View style={styles.connectionContainer}>
            <Loader />
            <Text>Disconnected to Network...</Text>
          </View>
          :
          <View style={styles.connectionContainer}>
            <Loader />
            <Text>Checking Connection...</Text>
          </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  connectionContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;