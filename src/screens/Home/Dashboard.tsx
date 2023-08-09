import { View, Image, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import Loader from '../../helpers/loader';
import CustomButton from '../../components/CustomButton';
import ShowToast from '../../components/ShowToast';
import { useIsFocused } from "@react-navigation/native";

const Dashboard = (props: any) => {
  const { navigation } = props;
  const isFocused = useIsFocused();

  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');
  useEffect(() => {
    GetToken();
  }, [isFocused]);

  async function GetToken() {
    setLoading(true);
    const user = auth().currentUser;
    if (user) {
      await user.getIdToken()
        .then(idToken => {
          console.log("got idToken")
          setToken(idToken);
          setLoading(false);
        })
        .catch(error => {
          ShowToast('Error getting ID token:');
          setLoading(false);
          console.log('Error getting ID token:', error);
          navigation.navigate('welcome');
        });
    } else {
      setLoading(false);
      navigation.navigate('welcome');
    }
  };

  const onSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
      .catch((err) => {
        navigation.replace('welcome');
      });
    navigation.replace('welcome');
  };

  return (
    <View style={{ height: '100%', flex: 1, backgroundColor: 'white' }}>
      <ScrollView  >
        <View style={styles.container}>
          <Image style={styles.appLogo} source={require('../../assets/Images/firebase_logo.png')} />
          <Text style={styles.homeTitle}>Welcome To Dashboard</Text>
          <View style={styles.tokenContainer}>
            {loading ?
              <Loader />
              :
              <Text style={{ color: "black" }}>{token}</Text>
            }
          </View>
          <CustomButton placeholder="Sign out" onPress={onSignOut} />
        </View>
      </ScrollView>
    </View >
  )
};
export default Dashboard;