import { RestAgent } from "../api-client.js";

export const Authentication = {
  authenticate: (data) => RestAgent.post("auth/login", data),
  register: (data) => {
    return RestAgent.post("auth/register", data);
  },
};
