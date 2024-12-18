import axios from "axios";
import appConfig from "../configs/app.configs";
import { TOKEN_TYPE, REQUEST_HEADER_AUTH_KEY } from "../constants/api.constant";
import store from "../store";
import { PERSIST_STORE_NAME } from "../constants/app.constant";

const unauthorizedCode = [401];

const BaseService = axios.create({
  timeout: 60000,
  baseURL: appConfig.apiPrefix,
});

BaseService.interceptors.request.use(
  (config) => {
    const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME);
    const persistData = structuredClone(rawPersistData);
    console.log(persistData);
    let accessToken = persistData.auth?.session?.token;

    if (!accessToken) {
      const { auth } = store.getState();
      accessToken = auth.session.token;
    }

    if (accessToken) {
      config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

BaseService.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    return Promise.reject(error);
  }
);

export default BaseService;
