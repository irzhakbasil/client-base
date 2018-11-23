import { FETCH_CLIENTS, FETCH_CLIENTS_ERROR } from "../types";

const RootUrl = "https://react-my-burger-marvin.firebaseio.com/clients.json"; // im using my stydy project database (firebase) here.

export const fetchClientsSuccess = payload => ({
  type: FETCH_CLIENTS,
  payload
});

export const fetchClientsError = error => ({
  type: FETCH_CLIENTS_ERROR,
  payload: error
});

export const fetchClients = () => {
  return async dispatch => {
    try {
      let response = await fetch(RootUrl);
      let json = await response.json();
      let data = [];
      if (json) {
        for (let key in json) {
          data.push(json[key]);
        }
      }
      dispatch(fetchClientsSuccess(data[0]));
    } catch (error) {
      dispatch(fetchClientsError(error.message));
    }
  };
};
