import { FETCH_CLIENTS, FETCH_CLIENTS_ERROR, SELECT_CLIENT } from "../types";

const initialState = {
  clients: null,
  error: null,
  selectedClient: null
};

export default function clientReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case FETCH_CLIENTS:
      return { ...state, clients: action.payload };
    case FETCH_CLIENTS_ERROR:
      return { ...state, error: action.payload, clients: null };
    case SELECT_CLIENT:
      return { ...state, selectedClient: action.payload };
    default:
      return state;
  }
}
