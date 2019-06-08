import axios from 'axios';
import * as logger from './logger';

/**
 * Create an Axios Client with defaults
 * @type {AxiosInstance}
 */
const client = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request Wrapper with default success/error actions
 * @param options
 * @returns {*}
 */
const request = (options) => {
  const onSuccess = (response) => {
    logger.debug('Request Successful!', response);
    return response.data;
  };

  const onError = (error) => {
    if (error.response) {
      // Request was made but server responded with something
      if (error.response.status === 401) {
        window.location.replace('/');
      }
      logger.error('Request:', options);
      logger.error('Response Status:', error.response.status);
      logger.error('Response Headers:', error.response.headers);
      logger.error('Response Data:', error.response.data);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      logger.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return client({ ...options })
    .then(onSuccess)
    .catch(onError);
};

const GET = (options) => {
  const method = 'GET';
  const params = options.params || {};
  return request({ ...options, method, params });
};

const POST = (options) => {
  const method = 'POST';
  const data = options.data || {};
  return request({ ...options, method, data });
};

const PUT = (options) => {
  const method = 'PUT';
  const data = options.data || {};
  return request({ ...options, method, data });
};

const DELETE = (options) => {
  const method = 'DELETE';
  const data = options.data || {};
  return request({ ...options, method, data });
};

export {
  GET, POST, PUT, DELETE,
};
