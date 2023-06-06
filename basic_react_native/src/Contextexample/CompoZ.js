//import liraries
import React, {Component, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Firstname} from './CompoA';
import MyContext from './Mycontext';
// create a component
const CompoZ = () => {
  const getvalue = useContext(MyContext);
  return (
    <View style={styles.container}>
      <Text>{getvalue}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default CompoZ;
