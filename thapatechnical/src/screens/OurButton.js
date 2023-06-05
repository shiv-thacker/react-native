//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {postReq} from './project/CCavenue/ccavenuerequest';

// create a component
const OurBUtton = () => {
  return (
    <View style={styles.container}>
      <Text>buttons</Text>
      <Button
        title="hii this  is button"
        onPress={() => {
          postReq();
        }}></Button>

      <TouchableOpacity
        onPress={() => {
          Alert.alert('hii this is touchable');
        }}>
        <Text>hii this is text with touchable opacuty</Text>
      </TouchableOpacity>
    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 10,
  },
});

//make this component available to the appa
export default OurBUtton;
