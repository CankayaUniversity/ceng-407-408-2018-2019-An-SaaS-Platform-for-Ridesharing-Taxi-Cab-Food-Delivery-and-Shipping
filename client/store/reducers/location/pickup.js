import {
  SET_PICKUP_LOCATION_REQUEST,
  SET_PICKUP_LOCATION_SUCCESS,
  SET_PICKUP_LOCATION_FAILURE,
} from '../../actions';

const initialState = {};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_PICKUP_LOCATION_REQUEST:
      return { ...state, payload };
    case SET_PICKUP_LOCATION_SUCCESS:
      return { ...state, payload };
    case SET_PICKUP_LOCATION_FAILURE:
      return { ...state, payload };
    default:
      return state;
  }
}
