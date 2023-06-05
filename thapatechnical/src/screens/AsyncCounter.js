//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const Asyncexample = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    retrivedata();
  }, []);
  useEffect(() => {
    storedata();
  }, [count]);

  const storedata = async () => {
    try {
      await AsyncStorage.setItem('getcount', count.toString());
    } catch (error) {
      console.log(error);
    }
  };
  const retrivedata = async () => {
    try {
      const value = await AsyncStorage.getItem('getcount');
      if (value !== null) {
        setcount(parseInt(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setcount(count - 1)}>
        <Text style={[styles.textstyle, {letterSpacing: -3}]}>--</Text>
      </TouchableOpacity>
      <Text style={styles.textstyle}>{count}</Text>
      <TouchableOpacity onPress={() => setcount(count + 1)}>
        <Text style={styles.textstyle}> + </Text>
      </TouchableOpacity>
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
  textstyle: {
    fontSize: 50,
    padding: 10,
  },
});

//make this component available to the app
export default Asyncexample;
