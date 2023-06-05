//import liraries
import React, {Component, createContext, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyContext from './Mycontext';
import CompoB from './CompoB';

// create a component
const CompoA = () => {
  return (
    <View style={styles.container}>
      <MyContext.Provider value={'component A to Z'}>
        <CompoB />
      </MyContext.Provider>
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
export default CompoA;
