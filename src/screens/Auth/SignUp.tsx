import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

const SignUp = (props) => {
  const { navigation } = props;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check_password, set_check_Password] = useState('');

  const onSignUp = () => {
    navigation.navigate('SignIn');
  };

  const social_login = () => {
    alert("Social API Not Connected");
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.redmilogo} source={require('../../assets/Images/firebase_logo.png')} />
        {/* <Text style={{ textAlign: "center", paddingTop: "20%", fontSize: 25, fontWeight: 'bold' }}>Create Account</Text> */}
        <CustomInput
          placeholder="Name"
          value={username}
          setvalue={setUsername}
          secureTextEntry={false}
          heading="Full name"
        />

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

        <CustomInput
          placeholder="repeat password"
          value={check_password}
          setvalue={set_check_Password}
          secureTextEntry={true}
          heading="Repeat password"
        />

        <Text style={{ color: "gray", padding: 20 }}>
          By registering you confirm that you accept our{" "}
          <Text style={{ color: "#f07d20" }}>Terms of Use</Text>{" "}
          and {" "}
          <Text style={{ color: "#f07d20" }}>Privacy Policy</Text>
        </Text>

        <CustomButton placeholder="Sign up" onPress={onSignUp} />
        <CustomButton placeholder="Already have an account? Sign in. " onPress={onSignUp} type='forget' />
      </ScrollView>
    </View>

  )
}
export default SignUp