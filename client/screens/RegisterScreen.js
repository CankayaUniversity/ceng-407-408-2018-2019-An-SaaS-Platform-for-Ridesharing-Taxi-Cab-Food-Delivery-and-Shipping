import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Alert,
} from 'react-native';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Register',
  };

  constructor(user) {
    super(user);
    this.state = {
      email: '',
      surname: '',
      email: '',
      password: '',
      userType: '',
      phone: '',
      city: '',
    };
  }

  _userRegister(user) {
    // if (user) {
    //   fetch('http://localhost:3000/users', {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       name: this.name,
    //       surname: this.surname,
    //       password: this.password,
    //       email: this.email,
    //       city: this.city,
    //       phone: this.phone,
    //       userType: this.userType,
    //     }),
    //   })
    //     .then(response => response.json())
        
        // .done();
        Alert.alert('Registered Succesfully')
        this.props.navigation.navigate('Login')
    }
    
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{ uri: 'https://img.icons8.com/ultraviolet/50/000000/employee-card.png' }} />
          <TextInput
            style={styles.inputs}
            placeholder="Name"
            keyboardType="default"
            underlineColorAndroid="transparent"
            onChangeText={name => this.setState({ name })} />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{ uri: 'https://img.icons8.com/ultraviolet/50/000000/employee-card.png' }} />
          <TextInput
            style={styles.inputs}
            placeholder="Surname"
            keyboardType="default"
            underlineColorAndroid="transparent"
            onChangeText={surname => this.setState({ surname })} />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{ uri: 'https://png.icons8.com/message/ultraviolet/50/3498db' }} />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })} />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{ uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db' }} />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })} />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{ uri: 'https://img.icons8.com/ultraviolet/50/000000/marker.png' }} />
          <TextInput
            style={styles.inputs}
            placeholder="City"
            keyboardType="default"
            underlineColorAndroid="transparent"
            onChangeText={city => this.setState({ city })} />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{ uri: 'https://img.icons8.com/ultraviolet/50/000000/phone.png' }} />
          <TextInput
            style={styles.inputs}
            placeholder="Phone"
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
            onChangeText={phone => this.setState({ phone })} />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{ uri: 'https://img.icons8.com/ultraviolet/50/000000/checked.png' }} />
          <TextInput
            style={styles.inputs}
            placeholder="User Type"
            keyboardType="default"
            underlineColorAndroid="transparent"
            onChangeText={userType => this.setState({ userType })} />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={user => this._userRegister(user)}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.loginText}>Cancel</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#FF8C00',
  },
  loginText: {
    color: 'white',
  },
});
