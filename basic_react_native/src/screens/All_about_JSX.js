//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Allaboutjsx = () => {
  const jsxcomponentasvariable = (
    <Text>you can take jsx conponent as a variable</Text>
  );

  const wholefunctioninjsx = (parameter1, parameter2, parameter3) => {
    return ` ${parameter1} ${parameter2} ${parameter3}`;
  };

  return (
    <View style={styles.container}>
      {jsxcomponentasvariable}
      <Text>
        Hii my name is
        {wholefunctioninjsx('parameter1', 'parameter2', 'parameter3')}
      </Text>
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
export default Allaboutjsx;
