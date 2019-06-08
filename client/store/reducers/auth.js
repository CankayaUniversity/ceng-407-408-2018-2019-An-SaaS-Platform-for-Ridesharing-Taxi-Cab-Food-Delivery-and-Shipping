import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from '../actions';

const initialState = {};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_USER_REQUEST:
      return { ...state, payload };
    case CREATE_USER_SUCCESS:
      return { ...state, payload };
    case CREATE_USER_FAILURE:
      return { ...state, payload };
    default:
      return state;
  }
}
