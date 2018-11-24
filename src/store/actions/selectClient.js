import { SELECT_CLIENT } from "../types";

export const selectClient = obj => ({
  type: SELECT_CLIENT,
  payload: obj
});
