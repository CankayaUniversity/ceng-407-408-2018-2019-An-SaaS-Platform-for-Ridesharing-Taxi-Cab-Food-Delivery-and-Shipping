import {
  SET_DESTINATION_LOCATION_SUCCESS,
  SET_DESTINATION_LOCATION_FAILURE,
  SET_DESTINATION_LOCATION_REQUEST,
} from '../../actions';

const initialState = {};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_DESTINATION_LOCATION_REQUEST:
      return { ...state, payload };
    case SET_DESTINATION_LOCATION_SUCCESS:
      return { ...state, payload };
    case SET_DESTINATION_LOCATION_FAILURE:
      return { ...state, payload };
    default:
      return state;
  }
}
