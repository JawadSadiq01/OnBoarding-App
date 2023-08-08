import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const Loader = () => {
  return (
    <View style={[styles.container]} >
      < ActivityIndicator color={'black'} size="small" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default Loader;