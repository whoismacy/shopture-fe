import instance from "./axiosConfig";

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,

  (error) => {
    if (
      error.response &&
      (error.response.states === 401 || error.response.status === 403)
    ) {
      // we are going to direct the user to login page to generate a new token.
      // using react-router-dom useNavigate()
      localStorage.removeItem("jwt_token");
    }
    return Promise.reject(error);
  }
);

// The return values of the response object (successful HTTP request)
// data, status, statusText, headers, config, request

// The return values of the error object (unsuccessful HTTP request)
// message, name, code, config, request, response(obj)
