export const SET_PICKUP_LOCATION_REQUEST = 'SET_PICKUP_LOCATION_REQUEST';
export const SET_PICKUP_LOCATION_SUCCESS = 'SET_PICKUP_LOCATION_SUCCESS';
export const SET_PICKUP_LOCATION_FAILURE = 'SET_PICKUP_LOCATION_FAILURE';
export const SET_DESTINATION_LOCATION_REQUEST = 'SET_DESTINATION_LOCATION_REQUEST';
export const SET_DESTINATION_LOCATION_SUCCESS = 'SET_DESTINATION_LOCATION_SUCCESS';
export const SET_DESTINATION_LOCATION_FAILURE = 'SET_DESTINATION_LOCATION_FAILURE';

export const setPickupLocation = payload => ({
  type: SET_PICKUP_LOCATION_REQUEST,
  payload,
});

export const setDestinationLocation = payload => ({
  type: SET_DESTINATION_LOCATION_REQUEST,
  payload,
});