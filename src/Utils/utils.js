import axios from "axios";
import { AUTH_TOKEN } from "./constants";
import { adminRoutes } from "../Admin/adminRoutes";
import { userRoutes } from "../User/userRoutes";

export const doHttpCall = (options) => {
  options.headers = { token: `Bearer ${AUTH_TOKEN}`, "Content-Type": "application/json" };
  try {
    return axios(options);
  } catch (e) {
    return e.response;
  }
};

export const getRoutesByRole = (role) => {
  switch (role) {
    case "user":
      return userRoutes;
    case "admin":
      return adminRoutes;
    default:
      return userRoutes;
  }
};

export const updateState = (setter) => (event) => setter(event.target.value);

export const clearState = (...setterFunctions) => {
  setterFunctions.length &&
    setterFunctions.forEach((fn) => {
      fn("");
    });
};
