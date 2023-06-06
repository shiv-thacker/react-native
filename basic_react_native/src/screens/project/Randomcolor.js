//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';

// create a component
const Randomcomponent = () => {
  const [ArrayRandomcolor, setArrayRandomcolor] = useState([]);
  const Generateeandomcolor = () => {
    const Red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    return `rgb(${Red} , ${blue}, ${green})`;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => {
          setArrayRandomcolor([...ArrayRandomcolor, Generateeandomcolor()]);
          // Alert.alert(Generateeandomcolor());
        }}>
        <Text>generate random color</Text>
      </TouchableOpacity>
      <FlatList
        style={{height: 300, width: 300}}
        keyExtractor={key => key}
        data={ArrayRandomcolor}
        renderItem={({item}) => {
          return (
            <Text style={{backgroundColor: item, height: 100, width: 100}}>
              {item}
            </Text>
          );
        }}></FlatList>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonstyle: {
    height: 100,
    width: 300,
    backgroundColor: '#blue',
  },
});

//make this component available to the app
export default Randomcomponent;
