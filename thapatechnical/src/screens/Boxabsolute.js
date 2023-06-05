//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Boxabsolute = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxparent}>
        <Text style={[styles.commomstyle, styles.box1]}>1</Text>
        <Text style={[styles.commomstyle, styles.box2]}>2</Text>
        <Text style={[styles.commomstyle, styles.box3]}>3</Text>
        <Text style={[styles.commomstyle, styles.box4]}>4</Text>
        <View style={styles.box5parent}>
          <Text style={[styles.commomstyle, styles.box5]}>5</Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
    backgroundColor: 'grey',
  },
  boxparent: {height: 300, width: 300, position: 'relative'},
  box5parent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  box1: {},
  box2: {right: 0},
  box3: {bottom: 0, right: 0},
  box4: {bottom: 0},
  box5: {},
  commomstyle: {
    height: 50,
    width: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    position: 'absolute',
    backgroundColor: 'red',
  },
});

//make this component available to the app
export default Boxabsolute;
