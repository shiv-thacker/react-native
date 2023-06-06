//import liraries
import React from 'react';
import {View, StyleSheet, Image, Text, Button, Linking} from 'react-native';

// create a component
const Netflixcaed = () => {
  return (
    <View style={styles.container}>
      <View style={{height: undefined, width: 100, borderWidth: 1}}>
        <Image
          style={styles.imgstyle}
          source={{
            uri: 'https://cdn.marvel.com/content/2x/MLou2_Payoff_1-Sht_Online_DOM_v7_Sm.jpg',
          }}></Image>
        <Text>Avengers end game</Text>
        <Text
          style={{
            marginBottom: 10,
            color: 'red',
            fontSize: 10,
            fontStyle: 'italic',
            fontWeight: '200',
            //fontVariant: ['small-caps'],
            letterSpacing: 2,
            lineHeight: 22,
            textAlign: 'justify',
            textTransform: 'capitalize',
          }}>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </Text>
        <Button
          title="watch now"
          onPress={() => {
            Linking.openURL('https://www.youtube.com/watch?v=owovksHtBOQ');
          }}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  imgstyle: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'stretch',
  },
});

//make this component available to the app
export default Netflixcaed;
