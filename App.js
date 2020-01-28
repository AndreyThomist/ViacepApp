import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header'
import ApiFormScreen from './components/ApiFormScreen'


export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => {
         Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header title="CONSULTE API VIACEP" />
        <ApiFormScreen />
    </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
