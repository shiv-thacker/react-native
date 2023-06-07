//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {decnumber, incNumber} from '../reduxstore/actions';

// create a component
const Reduxcounter = () => {
  let num = useSelector(hii => hii.Changenumber);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Redux</Text>
      <TouchableOpacity onPress={() => dispatch(decnumber())}>
        <Text style={[styles.textstyle, {letterSpacing: -3}]}>--</Text>
      </TouchableOpacity>
      <Text style={styles.textstyle}>{num}</Text>
      <TouchableOpacity onPress={() => dispatch(incNumber(5))}>
        <Text style={styles.textstyle}> + </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    flexDirection: 'row',
  },

  textstyle: {
    fontSize: 50,
    padding: 10,
  },
});

//make this component available to the app
export default Reduxcounter;
