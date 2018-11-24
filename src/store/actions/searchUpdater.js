import { SEARCH_TRIGGERED } from "../types";

export const searchUpdater = array => ({
  type: SEARCH_TRIGGERED,
  payload: array
});
