import React from 'react';
import {
  StyleSheet, Text, View, Dimensions, TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;

const DestinationButton = ({ onPress }) => (
  <TouchableOpacity onPress={() => onPress && onPress()} style={styles.container}>
    <View style={styles.leftCol}>
      <Text style={{ fontSize: 8 }}>{'\u25a0'}</Text>
    </View>
    <View style={styles.centerCol}>
      <Text style={{ fontFamily: 'space-mono', fontSize: 21, color: '#545454' }}>Where To?</Text>
    </View>
    <View style={styles.rightCol}>
      <Ionicons name="md-car" color="#000000" size={25} style={{ alignSelf: 'center' }} />
    </View>
  </TouchableOpacity>
);

export default DestinationButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fab1a0',
    zIndex: 9,
    position: 'absolute',
    flexDirection: 'row',
    width: WIDTH - 40,
    height: 60,
    top: 90,
    left: 20,
    borderRadius: 2,
    shadowColor: '#000000',
    elevation: 6,
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
  leftCol: {
    flex: 1,
    alignItems: 'center',
  },
  centerCol: {
    flex: 4,
  },
  rightCol: {
    flex: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed',
  },
});
