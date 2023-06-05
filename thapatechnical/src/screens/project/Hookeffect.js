//import liraries
import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

// create a component
const Hookeffect = () => {
  const [myuserData, setuserData] = useState([]);
  // const [Loading, setLoading] = useState(true);

  const getdata = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      const actualresponse = await response.json();

      setuserData([...myuserData, actualresponse]);

      console.log(myuserData);
      //setLoading(false);
    } catch (error) {
      Alert.alert(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.incontainer}
        data={myuserData}
        renderItem={({item}) => {
          return (
            <View style={styles.inincontainer}>
              <Text>{item.title}</Text>
              <Text>{item.id}</Text>
              <Text>{item.userId}</Text>
              <Text>{item.completed}</Text>
            </View>
          );
        }}
        keyExtractor={item => {
          return item.id.toString();
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
    backgroundColor: '#ffffff',
  },
  incontainer: {
    backgroundColor: '#ffffff',
  },
  inincontainer: {
    backgroundColor: 'red',
  },
});

//make this component available to the app
export default Hookeffect;
