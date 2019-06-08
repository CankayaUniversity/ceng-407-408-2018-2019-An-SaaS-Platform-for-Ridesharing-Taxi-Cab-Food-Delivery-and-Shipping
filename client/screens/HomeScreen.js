import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { MapView, Permissions, Location } from 'expo';
// import { connect } from 'react-redux';

import DestinationButton from '../components/DestinationButton';
import { CurrentLocationButton } from '../components/CurrentLocationButton';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      region: null,
    };
    this.__getLocationAsync();
  }

  __getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('Permission to acces location was denied.');
    }
    const location = await Location.getCurrentPositionAsync({ enabledHighAccuracy: true });
    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    };
    this.setState({ region });
  };

  handleFocusPress() {
    const {
      region: {
        latitude, longitude, latitudeDelta, longitudeDelta,
      } = {},
    } = this.state;

    this.map.animateToRegion({
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    });
  }


  render() {
    const { navigation, destination } = this.props;
    return (
      <View style={styles.container}>
        <DestinationButton onPress={() => navigation.navigate('Route')} />
        <CurrentLocationButton
          cb={() => {
            this.handleFocusPress();
          }} />
        <MapView
          initialRegion={this.state.region}
          showsUserLocation
          showsCompass
          rotateEnabled={false}
          ref={(map) => {
            this.map = map;
          }}
          style={{ flex: 1 }} />
      </View>
    );
  }
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
