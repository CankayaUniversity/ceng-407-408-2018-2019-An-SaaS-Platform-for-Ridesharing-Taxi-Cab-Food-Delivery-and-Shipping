import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import { 
  Register, 
  Home,
  Login,
} from '../navigation/AppNavigator'
export default class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }
  

  _userLogin(props){
      
      if(props){
      
          fetch("http://127.0.0.1:3000/users/login",{
              method:'POST',
              headers:{
                  'Accept':'application/json',
                  'Content-Type':'application/json'
              },
              body: JSON.stringify({
                  email:this.email,
                  password:this.password,
              })
          })
          .then((response)=>response.json.token())
          .then((responseData)=> {
              Alert.alert("Login Success"),
             this._onValuseChange(STORAGE_KEY,responseData.token)
            })
            .done();
  
    }
  }

  
  render() {
    return (
      <View style={styles.container}>
      <View>
      <Image
          style={{width: 120, height: 120,marginBottom:-40}}
          source={require('../assets/images/home-icon.png')}
          />
      </View>
      <View>
      <Image
          style={{width: 200, height: 200,marginBottom:0}}
          source={require('../assets/images/rots-icon.png')}
          />
      </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
              
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={(user)=> this._userLogin(user)}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>
        
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=> this.props.navigation.navigate("Register")}>
            <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('restore_password')}>
            <Text>Forgot your password?</Text>
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
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#FF8C00",
  },
  loginText: {
    color: 'white',
  }
});