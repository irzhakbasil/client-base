import { FETCH_CLIENTS, FETCH_CLIENTS_ERROR } from "../types";

const initialState = {
  clients: null,
  error: null
};

export default function clientReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CLIENTS:
      return { ...state, clients: action.payload };
    case FETCH_CLIENTS_ERROR:
      return { ...state, error: action.payload, clients: null };
    default:
      return state;
  }
}
