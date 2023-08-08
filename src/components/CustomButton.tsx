import React from 'react';
import { View, Text, StyleSheet, Pressable, Button, ToastAndroid, Alert, TouchableOpacity } from 'react-native';
import Loader from '../helpers/loader';

export default function CustomButton(props: any) {
  const { placeholder, loading = false, onPress, type = 'primary' } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={loading}
        onPress={onPress}
        style={[styles[`button_${type}`]]}
      >
        {loading ?
          <Loader />
          :
          <Text style={[styles[`text_${type}`]]} >{placeholder}</Text>
        }
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginBottom: 10,
    alignSelf: "center",
  },
  button_primary: {
    borderColor: "#f5f5f5",
    borderWidth: 1,
    padding: 14,
    borderRadius: 5,
    height: 50,
    backgroundColor: "#f07d20",
    justifyContent: 'center'

  },
  button_social_login_google: {
    borderColor: "#FAE9EA",
    borderWidth: 1,
    padding: 14,
    borderRadius: 5,
    backgroundColor: "#FAE9EA"
  },
  button_social_login_facebook: {
    borderColor: "#E7EAF4",
    borderWidth: 1,
    padding: 14,
    borderRadius: 5,
    backgroundColor: "#E7EAF4"
  },

  text_social_login_google: {
    fontWeight: '800',
    color: "#DD4D44",
    width: "100%",
    textAlign: "center",
  },
  text_social_login_facebook: {
    fontWeight: '800',
    color: "#4765A9",
    width: "100%",
    textAlign: "center",
  },
  button_forget: {
    padding: 14,
  },
  text_primary: {
    color: "white",
    width: "100%",
    textAlign: "center",
  },
  text_forget: {
    color: "gray",
    width: "100%",
    textAlign: "center",
  },

})