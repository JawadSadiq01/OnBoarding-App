import { View, Image } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
const WelcomeScreen = (props: any) => {

  const { navigation } = props;

  const onLogin = () => {
    navigation.navigate('login');
  };
  const onSignUp = () => {
    navigation.navigate('sign-up');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.appLogo} source={require('../../assets/Images/firebase_logo.png')} />
      <View style={styles.welcomeActions}>
        <CustomButton placeholder="Login" onPress={onLogin} />
        <CustomButton placeholder="Sign up" onPress={onSignUp} />
      </View>
    </View>
  )
};

export default WelcomeScreen;