import React from "react";
import {
    StyleSheet,
    View,
    Dimensions,
}from "react-native";
import{MaterialIcons} from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const CurrentLocationButton = (props) => {
    const cb = props.cb ? props.cb : () => console.log("callback function not passed to CurrentLocationButton!");
    
    const bottom = props.bottom ? props.bottom : 100;
    return (
        <View style = {[styles.container, {top: HEIGHT-bottom}]}>
        <MaterialIcons 
            name="my-location" 
            color="#000000" 
            size = {25} 
            onPress={() => {cb()}}
            />
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#00b5ec',
      zIndex:9,
      position:"absolute",
      flexDirection:"row",
      width:45,
      height:45,
      top:110,
      left:WIDTH-70,
      borderRadius:50,
      shadowColor:"#000000",
      elevation:7,
      shadowRadius:5,
      shadowOpacity:1.0      
    },
    leftCol:{
        flex:1,
        alignItems:"center",
    },
    centerCol:{
        flex:4,
    },
    rightCol:{
        flex:1,
        borderLeftWidth:1,
        borderColor:"#ededed"
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