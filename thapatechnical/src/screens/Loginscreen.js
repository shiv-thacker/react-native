//import liraries
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

// create a component
const Loginscreen = () => {
  const submit = () => {
    if (username === 'shivang' && password === 'shivang') {
      Alert.alert(`welcome ${username}`);
    } else {
      Alert.alert(' your username and password are not matching');
    }
  };

  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [checked, setchecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Login</Text>
      <Text style={styles.textstyle}>Please login from here</Text>
      <TextInput
        style={styles.textinputstyle}
        value={username}
        placeholder="name"
        onChangeText={hii => setusername(hii)}
      />
      <TextInput
        style={styles.textinputstyle}
        value={password}
        placeholder="password"
        secureTextEntry={!checked}
        onChangeText={hii => setpassword(hii)}
      />
      <CheckBox
        value={checked}
        onValueChange={() => setchecked(!checked)}
        color={checked ? '#4630EB' : undefined}
      />
      <TouchableOpacity
        style={styles.touchable}
        disabled={!checked}
        onPress={() => submit()}>
        <Text style={styles.textstyle}>Please login from here</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginBottom: 46,
    marginTop: 21,
    padding: 10,
  },
  textinputstyle: {
    borderColor: '#000000',
    borderWidth: 2,
    backgroundColor: '#ffffff',
    color: '#000000',
    marginVertical: 10,
  },
  textstyle: {
    color: 'black',
    fontSize: 23,
  },
  touchable: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

//make this component available to the app
export default Loginscreen;
