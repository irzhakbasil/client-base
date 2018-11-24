import { createSelector } from "reselect";

const clientsSelector = state => state.clientReducer.clients;
const filteredClients = state => state.clientReducer.matches;

const getClients = (clients, array) => {
  let tmpObj = [];
  array.map(el => {
    let a = {
      ...clients[el],
      id: el
    };
    tmpObj.push(clients[el]);
    return 0;
  });
  return tmpObj;
};

export default createSelector(
  clientsSelector,
  filteredClients,
  getClients
);
