import { View, Image } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
import { firebase } from '@react-native-firebase/auth';
import ShowToast from '../../components/ShowToast';
import { IsValidEmail, IsValidPassword } from '../../components/Validation';

const Login = (props: any) => {

  const { navigation } = props;
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignIN = async () => {
    setLoading(true);
    if (!IsValidEmail(email)) {
      ShowToast('Invalid email address');
      setLoading(false);
    } else if (!IsValidPassword(password)) {
      ShowToast('Invalid password');
      setLoading(false);
    } else {
      await firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
        ShowToast('Successfully logged in');
        setLoading(false);
        navigation.navigate('home');
      }).catch((error: any) => {
        if (error.code === 'auth/wrong-password') {
          ShowToast('The password is invalid');
        }
        if (error.code === 'auth/user-not-found') {
          ShowToast('Email address is Invalid');
        }
        setLoading(false);
      });

    }

  };

  const onSignUp = () => {
    navigation.navigate('sign-up');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.appLogo} source={require('../../assets/Images/firebase_logo.png')} />
      <CustomInput
        placeholder="Email"
        value={email}
        setvalue={setEmail}
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
      <CustomButton placeholder="Sign In" loading={loading} onPress={onSignIN} />
      <CustomButton placeholder="Don't have an account? Create one. " onPress={onSignUp} type='forget' />
    </View>
  )
};

export default Login;