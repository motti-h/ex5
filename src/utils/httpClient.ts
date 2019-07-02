import request from 'request-promise';

const HttpClient = () => {
  // a handy place to future defaults via reques.defaults
  return request;
};

export {
  HttpClient,
};