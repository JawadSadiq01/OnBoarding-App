import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  appLogo: {
    alignSelf: "center",
    width: 300,
    resizeMode: 'contain',
  },
  homeTitle: {
    fontSize: 40,
    margin: 0,
    textAlign: 'center',
    marginBottom: 50,
  },
  tokenContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    width: '90%'
  }
});
export default styles;