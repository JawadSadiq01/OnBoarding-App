import React from 'react';
import { View, Text, StyleSheet, Pressable, Button, Alert, TextInput, Image } from 'react-native';

export default function CustomInput(props: any) {
  const { heading, placeholder, value, setvalue, secureTextEntry } = props;

  return (
    <View style={styles.container} >
      < View style={{
        padding: 10,
        marginRight: 5
      }}>
        <Text>{heading}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setvalue}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginBottom: 15,
    alignSelf: "center",
  },
  input: {
    borderColor: "#f5f5f5",
    borderWidth: 1,
    padding: 14,
    borderRadius: 15,
    backgroundColor: "#f5f5f5",
    width: "100%",
  }


})