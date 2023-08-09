import { View, Image, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Loader from '../../helpers/loader';
import CustomButton from '../../components/CustomButton';
const HomeScreen = (props: any) => {
  const { navigation } = props;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getToken();
  }, [])

  const getToken = async () => {
    // setLoading(true);
  };

  const onWelcome = () => {
    navigation.navigate('welcome');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.redmilogo} source={require('../../assets/Images/firebase_logo.png')} />
      <Text style={styles.homeTitle}>Welcome To Dashboard</Text>
      <View style={styles.tokenContainer}>
        {loading ?
          <Loader />
          :
          <Text>Token</Text>
        }
      </View>
      <CustomButton placeholder="Sign out" onPress={onWelcome} />

    </View>
  )
};

export default HomeScreen;