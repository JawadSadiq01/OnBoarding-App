import { View, Image } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
const Login = (props: any) => {

  const { navigation } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignIN = () => {
    navigation.navigate('home');
  };
  const onSignUp = () => {
    navigation.navigate('sign-up');
  };
  const onForgetPassword = () => {
    // navigation.navigate('ForgetPassword')
  };
  const social_login = () => { };

  return (
    <View style={styles.container}>
      <Image style={styles.redmilogo} source={require('../../assets/Images/firebase_logo.png')} />
      <CustomInput
        placeholder="Username"
        value={username}
        setvalue={setUsername}
        secureTextEntry={false}
        heading="Email"
      />
      <CustomInput
        placeholder="password"
        value={password}
        setvalue={setPassword}
        secureTextEntry={true}
        heading="Password"
      />
      <CustomButton placeholder="Sign In" onPress={onSignIN} />
      <CustomButton placeholder="Forgot Password?" onPress={onForgetPassword} type='forget' />
      <CustomButton placeholder="Don't have an account? Create one. " onPress={onSignUp} type='forget' />
    </View>
  )
};

export default Login;