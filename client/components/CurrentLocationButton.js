import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const CurrentLocationButton = (props) => {
  const cb = props.cb
    ? props.cb
    : () => console.log('callback function not passed to CurrentLocationButton!');

  const bottom = props.bottom ? props.bottom : 100;
  return (
    <View style={[styles.container, { top: HEIGHT - bottom }]}>
      <MaterialIcons
        name="my-location"
        color="#000000"
        size={25}
        onPress={() => {
          cb();
        }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    zIndex: 9,
    position: 'absolute',
    flexDirection: 'row',
    width: 45,
    height: 45,
    top: 110,
    left: WIDTH - 70,
    borderRadius: 50,
    shadowColor: '#000000',
    elevation: 7,
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
});
