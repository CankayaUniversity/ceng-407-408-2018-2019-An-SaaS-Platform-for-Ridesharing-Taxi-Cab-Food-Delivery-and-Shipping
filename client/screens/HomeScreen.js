import React, { Component } from 'react';
import { StyleSheet, View, Alert, Platform, Text, Dimensions, TouchableHighlight } from 'react-native';
import { MapView, Permissions, Location, Constants } from 'expo';
// import { connect } from 'react-redux';

import DestinationButton from '../components/DestinationButton';
import { CurrentLocationButton } from '../components/CurrentLocationButton';
import MapViewDirections from '../components/MapViewDirections';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.045;
const LONGITUDE_DELTA = 0.045;
const GOOGLE_MAPS_APIKEY = 'AIzaSyCYvMpmVhFc0ydILEuXGJNYNGFnBoKPCL8';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      coordinates:null,
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
  onMapPress = (e) => {
		if (this.state.coordinates==null) {
      const coordinates = {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };
			this.setState({
				coordinates,
      });
    }
    else {
      this.setState({coordinates:null});
      }

  }
  onMapReady = (result) => {
		this.mapView.fitToCoordinates(result.coordinate, {
			edgePadding: {
				right: (width / 20),
				bottom: (height / 20),
				left: (width / 20),
				top: (height / 20),
			}
		});
  }
  onError = (errorMessage) => {
		Alert.alert(errorMessage);
	}
_startRide()
{

  Alert.alert(
    'ROTS',
    'Ride Has Started',
    
      {text: 'NO', onPress: () => console.warn('Ride Started'), style: 'cancel'}
    
    
  );



}
_finishRide()
{

  Alert.alert(
    'ROTS',
    'Ride Has Finished',
    
      {text: 'NO', onPress: () => console.warn('Ride Finished'), style: 'cancel'}
    
    
  );
this.props.navigation.navigate('Comment')


}
  render() { let data = [{
    value: '5',
  }, {
    value: '4',
  }, {
    value: '3',
  },{
    value: '2',
  }, {
    value: '1',
  }];
    const { navigation, destination } = this.props;
    return (
      <View style={styles.container}>
     
        
        <MapView
          initialRegion={this.state.region}
          showsUserLocation
          showsCompass
          rotateEnabled={false}
          ref={(map) => {
            this.map = map;
          }}
          onPress={this.onMapPress}
          loadingEnabled={true}
          style={{ flex: 1 }} >

        
  <MapView.Marker  coordinate={this.state.coordinates} />
{(this.state.coordinates !=null) && (
  <MapViewDirections
    origin={this.state.region}
    destination={this.state.coordinates}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    strokeColor="hotpink"
    onReady={this.onReady}
    onError={this.onError}
  />
)}
            </MapView>
            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={user => this._startRide()}>
          <Text style={styles.loginText}>Start Ride</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={user => this._finishRide()}>
          <Text style={styles.loginText}>Finish Ride</Text>
        </TouchableHighlight>
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
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      borderBottomWidth: 1,
      width: 100,
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
      alignItems:'center',
      marginBottom: 20,
      width: 360,
      borderRadius: 30,
    },


    loginButton: {
      backgroundColor: '#FF8C00',
      
    },
    loginText: {
      color: 'white',
    },
  });
  
