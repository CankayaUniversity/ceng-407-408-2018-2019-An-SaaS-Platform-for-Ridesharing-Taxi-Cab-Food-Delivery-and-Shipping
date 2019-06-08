import { call, put, takeLatest } from 'redux-saga/effects';
import { POST } from '../../libraries';
import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from '../actions';

function* createUserRequest({ payload }) {
  try {
    const response = yield call(POST, {
      url: '/users',
      data: {
        ...payload,
      },
    });

    if (response && response.results) {
      yield put({ type: CREATE_USER_SUCCESS, payload: response.results });
    } else {
      yield put({ type: CREATE_USER_FAILURE, payload: response });
    }
  } catch (error) {
    yield put({ type: CREATE_USER_FAILURE, payload: error });
  }
}

function* Saga() {
  yield takeLatest(CREATE_USER_REQUEST, createUserRequest);
}

export default Saga;
