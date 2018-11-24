import { SERCH_TRIGGERED } from "../types";

export const searchUpdater = array => ({
  type: SERCH_TRIGGERED,
  payload: array
});
