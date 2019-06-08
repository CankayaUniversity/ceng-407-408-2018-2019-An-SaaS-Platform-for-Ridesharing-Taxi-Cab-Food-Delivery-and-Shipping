import { CREATE_RIDE_REQUEST, CREATE_RIDE_FAILURE, CREATE_RIDE_SUCCESS } from '../actions';

const initialState = {};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_RIDE_REQUEST:
      return { ...state, payload };
    case CREATE_RIDE_SUCCESS:
      return { ...state, payload };
    case CREATE_RIDE_FAILURE:
      return { ...state, payload };
    default:
      return state;
  }
}
