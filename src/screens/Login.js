import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {
  const [state, setState] = useState({
    userName: '',
    password: '',
  });

  const handleChange = (value, name) => {
    try {
      setState(prevState => ({
        ...prevState,
        [name]: value,
      }));
    } catch (error) {
      console.log('Error in Handle Change Text' + error);
    }
  };

  const handleLogin = () => {navigation.navigate('GamePlayScreen')};


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => handleChange(text, 'userName')}
          value={state.userName}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => handleChange(text, 'password')}
          value={state.password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});

export default Login;
