//import liraries
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

// create a component
const Propsimage = ({imgsource, imgstyle}) => {
  return (
    <View style={styles.container}>
      <Image
        style={{...styles.imgstyle, ...imgstyle}}
        source={imgsource}></Image>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  imgstyle: {
    height: 30,
    width: 30,
  },
});

//make this component available to the app
export default Propsimage;
