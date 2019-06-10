import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { StyleSheet, View, Alert, Platform, Text, Dimensions, TouchableHighlight } from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView>


<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}>


<Text style={styles.loginText}>Finish Ride</Text>
</TouchableHighlight>
    </ExpoConfigView>;


  <View>

    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}>


    <Text style={styles.loginText}>Finish Ride</Text>
    </TouchableHighlight>
  </View>


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
