import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const WIDTH =Dimensions.get("window").width;
export const DestinationButton = (props) => {
    return (
        <TouchableOpacity onPress={() => {}} style = {styles.container}>
            <View style = {styles.leftCol}>
                <Text style = {{fontSize:8}}>{"\u25a0"}</Text>
            </View>
            <View style = {styles.centerCol}>
                <Text style = {{fontFamily:"sans-serif-thin",fontSize:21,color:"#545454"}}>Where To?</Text>
            </View>
            <View style = {styles.rightCol}>
                <Ionicons name = "md-car" color="#000000" size={25} style={{alignSelf:"center"}}/>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00b5ec',
      zIndex:9,
      position:"absolute",
      flexDirection:"row",
      width:(WIDTH-40),
      height:60,
      top:110,
      left:20,
      borderRadius:2,
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