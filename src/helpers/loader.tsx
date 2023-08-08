import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { ILoaderProps } from '../Interfaces/interfaces';

const Loader = (props: ILoaderProps) => {
  const { msg } = props;
  return (
    <View style={[styles.container, styles.horizontal]} >
      < ActivityIndicator size="large" />
      <Text>{msg}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Loader;