//import liraries
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Propsimage from '../Components/Propsimage';

// create a component
const Imagedemo = () => {
  return (
    <View style={styles.container}>
      <Propsimage
        imgsource={require('../../assests/mcs.png')}
        imgstyle={{width: 40}}
      />
      <Propsimage imgsource={require('../../assests/mcs.png')} />
      <Propsimage imgsource={require('../../assests/mcs.png')} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
});

//make this component available to the app
export default Imagedemo;
