//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import NewComponent from './src/screens/NewComponent';
import Allaboutjsx from './src/screens/All_about_JSX';
import Flatlistdemo from './src/screens/FlatlistDemo';
import Imagedemo from './src/screens/Imagedemo';
import OurBUtton from './src/screens/OurButton';
import Netflixcaed from './src/Components/Netflixcard';
import Boxabsolute from './src/screens/Boxabsolute';
import Randomcomponent from './src/screens/project/Randomcolor';
import Hookeffect from './src/screens/project/Hookeffect';
import Loginscreen from './src/screens/Loginscreen';
import Reduxcounter from './src/reduxstore/reducers/Redux';
import CompoZ from './src/Contextexample/CompoZ';
import CompoA from './src/Contextexample/CompoA';
import Asyncexample from './src/screens/AsyncCounter';

// create a component
const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Asyncexample />
      <CompoA />
      <Reduxcounter />
      <Loginscreen />
      <Hookeffect />
      <Randomcomponent />
      <Boxabsolute />
      <NewComponent />
      <Allaboutjsx />
      <Flatlistdemo />
      <Imagedemo />
      <OurBUtton />
      <Netflixcaed />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ffffff',
  },
});

//make this component available to the app
export default App;
