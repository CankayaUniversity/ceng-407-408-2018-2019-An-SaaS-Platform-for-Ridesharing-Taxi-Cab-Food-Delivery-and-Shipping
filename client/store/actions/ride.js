export const CREATE_RIDE_REQUEST = 'CREATE_RIDE_REQUEST';
export const CREATE_RIDE_SUCCESS = 'CREATE_RIDE_SUCCESS';
export const CREATE_RIDE_FAILURE = 'CREATE_RIDE_FAILURE';

export const createRideRequest = payload => ({
  type: CREATE_RIDE_REQUEST,
  payload,
});
