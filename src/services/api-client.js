import axios from "axios";
import { set } from "lodash";
import { StorageService } from "./storage/index.js";
import { toastify } from "@/components/utils/toastify.jsx";

const HOST = "http://localhost:2000";

const API_URL = `${HOST}/api/v1`;

export const RestAgent = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

RestAgent.interceptors.request.use(
  (config) => {
    // check if access token is available otherwise add to request
    const access_token = StorageService.getAccessToken();

    // add the access token to the request headers
    if (access_token)
      set(config, "headers.Authorization", `Bearer ${access_token}`);

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

RestAgent.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { code } = error;

    if (code === "ERR_NETWORK") {
      toastify({
        title: "Network Error",
        description: "Can't reach server currently",
      });

      return;
    } else {
      const {
        response: { data },
      } = error;
      return Promise.reject(data);
    }
  }
);

export const getRequestConfig = () => ({ params: {}, headers: {} });
