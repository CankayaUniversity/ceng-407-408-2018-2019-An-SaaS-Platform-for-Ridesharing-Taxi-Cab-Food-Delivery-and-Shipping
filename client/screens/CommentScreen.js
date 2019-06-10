
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

import { CheckBox } from 'react-native-elements'


export default class CommentScreen extends React.Component {

  static navigationOptions = {

  };
  constructor(props) {
    super(props);
    this.state = {
      checked   : false,
      
    }
  }
  

  _sendComment(props){
      
      if(props){
      
          //comment api  call
    }
    this.state.checked=true;
   
   {

    Alert.alert(
      'ROTS',
      'Thanks For Using Our App!',
      
        {text: 'NO', onPress: () => console.warn('Ride Started'), style: 'cancel'}
      
      
    );
  
  
  
  }
  this.props.navigation.navigate("Main");
  }

  
  render() {
    return (
      <View style={styles.container}>
      <View>
      <Image
          style={{width: 200, height: 200,marginBottom:0}}
          source={require('../assets/images/rots-icon.png')}
          />
      </View>
        
        <Text style={styles.titleText}>
        Rate Our App!

        </Text>
        

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={(props)=>this._sendComment(props)}>
            <Text style={styles.loginText}>1</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={(props)=>this._sendComment(props)}>
            <Text style={styles.loginText}>2</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={(props)=>this._sendComment(props)}>
            <Text style={styles.loginText}>3</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={(props)=>this._sendComment(props)}>
            <Text style={styles.loginText}>4</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={(props)=>this._sendComment(props)}>
            <Text style={styles.loginText}>5</Text>
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
      height:200,
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
    width:100,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#FF8C00",
  },
  loginText: {
    color: 'white',
  },

  titleText:{

    fontSize: 20,
    fontWeight: 'bold',
    color:'#FFFFFF'

  }
});