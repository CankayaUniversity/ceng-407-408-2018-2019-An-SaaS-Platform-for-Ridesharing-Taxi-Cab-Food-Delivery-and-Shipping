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
export default class CommentScreen extends React.Component {

  static navigationOptions = {

  };
  constructor(props) {
    super(props);
    state = {
      comment   : '',
      
    }
  }
  

  _sendComment(props){
      
      if(props){
      
          //comment api  call
    }
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
        
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Your feedback is important for us"
              secureTextEntry={false}
              underlineColorAndroid='transparent'
              onChangeText={(comment) => this.setState({comment})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={(props)=>this._sendComment(props) || this.props.navigaton.navigate("Home")}>
            <Text style={styles.loginText}>Send</Text>
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