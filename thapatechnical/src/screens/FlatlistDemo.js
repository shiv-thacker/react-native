//import liraries
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

// create a component
const Flatlistdemo = () => {
  const names = [
    {index: '1', name: 'name1'},
    {index: '2', name: 'name2'},
    {index: '3', name: 'name3'},
    {index: '4', name: 'name4'},
  ];
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatliststyle}
        keyExtractor={key => {
          return key.index;
        }}
        // numColumns={2}
        horizontal
        // inverted
        showsHorizontalScrollIndicator={false}
        data={names}
        renderItem={({item}) => (
          <View style={styles.viewstyle}>
            <Text style={styles.textstyle}>{item.name}</Text>
            <Text style={styles.textstyle}>{item.index}</Text>
          </View>
        )}></FlatList>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  textstyle: {
    fontSize: 40,
    textAlign: 'center',
  },
  viewstyle: {
    padding: 10,
  },
  flatliststyle: {
    backgroundColor: 'green',
  },
});

//make this component available to the app
export default Flatlistdemo;
