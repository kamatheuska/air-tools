/* eslint-disable */
const successLogger = (response) => {
  console.log(response.status);
  console.log(response.data);
  console.log(response.headers);
}

const errorLogger = (error) => {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  console.log(error.config);
}


export default {
  successLogger,
  errorLogger,
};


