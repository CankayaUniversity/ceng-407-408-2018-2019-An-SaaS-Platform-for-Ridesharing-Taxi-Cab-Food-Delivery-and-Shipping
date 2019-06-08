import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from 'react-native';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from 'react-native-popup-dialog';
import { connect } from 'react-redux';
import { setPickupLocation, setDestinationLocation } from '../store/actions';

class RouteScreen extends Component {
  static navigationOptions = {
    title: 'Select Destination',
    headerStyle: {
      backgroundColor: '#a29bfe',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  state = {
    loading: true,
    visible: false,
    destinationName: '',
    location: {
      latitude: 0,
      longitude: 0,
    },
  };

  renderAcceptDestination = () => {
    const { setDestination, navigation } = this.props;
    const { destinationName, visible, location } = this.state;
    return (
      <Dialog
        visible={visible}
        width={0.75}
        hasOverlay
        onTouchOutside={() => this.setState({ visible: false, destinationName: '' })}
        onHardwareBackPress={() => this.setState({ visible: false, destinationName: '' })}
        dialogTitle={<DialogTitle title={destinationName} />}
        footer={(
          <DialogFooter>
            <DialogButton
              text="CANCEL"
              onPress={() => this.setState({ visible: false, destinationName: '' })} />
            <DialogButton
              text="OK"
              onPress={() => {
                this.setState({
                  visible: false,
                });
                setDestination({
                  ...location,
                });
                navigation.goBack();
              }} />
          </DialogFooter>
)}>
        <DialogContent>
          <View style={styles.dialogText}>
            <Text>Are you sure to go there?</Text>
          </View>
        </DialogContent>
      </Dialog>
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          {loading && <ActivityIndicator size="large" color="#0000ff" />}
          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() =>
              this.setState({
                visible: true,
                destinationName: 'Kızılay AVM',
                location: {
                  latitude: 39.9215619,
                  longitude: 32.8512032,
                },
              })}>
            <Image
              style={styles.imageView}
              resizeMode="cover"
              source={require('../assets/locations/kizilayAVM.png')}
              onLoad={() => this.setState({ loading: false })} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() =>
              this.setState({
                visible: true,
                destinationName: 'Arcadium AVM',
                location: {
                  latitude: 39.8817869,
                  longitude: 32.6822244,
                },
              })}>
            <Image
              style={styles.imageView}
              resizeMode="cover"
              source={require('../assets/locations/arcadiumAVM.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() =>
              this.setState({
                visible: true,
                destinationName: 'Gordion AVM',
                location: {
                  latitude: 39.9005491,
                  longitude: 32.6889893,
                },
              })
            }>
            <Image
              style={styles.imageView}
              resizeMode="cover"
              source={require('../assets/locations/gordionAVM.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.2}
            onPress={() =>
              this.setState({
                visible: true,
                destinationName: 'Bilkent Center',
                location: {
                  latitude: 39.8847424,
                  longitude: 32.7541456,
                },
              })}>
            <Image
              style={styles.imageView}
              resizeMode="cover"
              source={require('../assets/locations/bilkentCenter.png')} />
          </TouchableOpacity>
        </View>
        {this.renderAcceptDestination()}
      </ScrollView>
    );
  }
}

const imageWidth = Dimensions.get('window').width;
const imageHeight = Math.round((imageWidth * 9) / 35);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
  },
  imageContainer: {},
  imageView: {
    height: imageHeight,
    width: imageWidth,
    marginTop: 6,
  },
  dialogText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
});

const mapStateToProps = state => ({
  pickup: state.pickup,
  destination: state.destination,
});

const mapDispatchToProps = dispatch => ({
  setPickup: payload => dispatch(setPickupLocation(payload)),
  setDestination: payload => dispatch(setDestinationLocation(payload)),
});

export default connect(
  null,
  mapDispatchToProps
)(RouteScreen);
