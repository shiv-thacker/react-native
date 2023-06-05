//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

// create a component
const MyComponent = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const [randomarray, setrandomarray] = useState([]);

  const generaterandomcolor = () => {
    return `rgb(${red},${green},${blue})`;
  };

  console.log(generaterandomcolor());
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={setrandomarray([...randomarray, generaterandomcolor()])}>
        <Text>Generate random color</Text>
      </TouchableOpacity>
      <FlatList
        data={{randomarray}}
        renderItem={({item}) => (
          <Text style={{backgroundColor: item}}> {item}</Text>
        )}
        keyExtractor={item => item.id.toString()}
      />
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
export default MyComponent;
