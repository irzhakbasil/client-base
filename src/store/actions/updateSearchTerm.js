import { SEARCH_TERM_UPDATED } from "../types";

export const updateSearchTerm = text => ({
  type: SEARCH_TERM_UPDATED,
  payload: text
});
