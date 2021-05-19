import axiosInstance from './axiosInstance';
import {Alert} from 'react-native';

// ERROR HANDLER
const handleError = error => {
  console.log(error);
  let err = {
    status: '',
    message:
      'Failed to receive response from the server. Please try again later or contact support.',
  };

  if (error && error.response && error.response.status && error.response.data) {
    err.status = error.response.status ?? '';
    err.message = error.response.data.error ?? '';

    if (error.response.status === 401) {
      alerter('Unauthorized', 'Incorrect user credentials', true);
      return null;
    } else {
      alerter('', err.message);
    }
  } else {
    alerter('Something went wrong', err.message);
  }

  return null;
};

const alerter = (
  title = 'Message',
  message = 'Hi, I am the default alerter.',
  refresh = false,
) => {
  Alert.alert(title, message, [
    {
      text: 'Close',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    // {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
};

/*
----------------------------------------------------------------------------
*/

// POST method API function
const postData = async (path, payload = {}) => {
  let response;

  response = await axiosInstance.post(path, payload).catch(handleError);
  if (response && response.data && response.status && response.status === 200) {
    return response.data;
  } else {
    return null;
  }
};

export {postData, alerter};
