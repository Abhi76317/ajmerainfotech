// eslint-disable-next-line import/no-named-default
import { default as axi } from "axios";
import { store } from "../redux/store";
// eslint-disable-next-line import/no-unresolved, import/extensions
import { showError } from "../redux/slice/alertSlice";

export const baseURL = process.env.REACT_APP_SERVER;

const axios = axi.create({
  baseURL: `${baseURL}/api`,
});

axios.interceptors.request.use((config) => config, (error) => Promise.reject(error));

axios.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (data.status === "error") {
      const errorMessage = data.message;
      store.dispatch(showError({ message: errorMessage }))
      return Promise.reject(data);
    }
    return data
  },
  (err) => {
    const { data } = err.response;
    let errorMessage = "Something went wrong!";
    if (data.status === "error") {
      // eslint-disable-next-line no-unused-vars
      errorMessage = data.message;
    }
    return Promise.reject(data);
  },
);

export default axios;
