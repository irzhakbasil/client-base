import { createSelector } from "reselect";

const clientsSelector = state => state.clientReducer.clients;
const filteredClients = state => state.clientReducer.matches;

const getClients = (clients, array) => {
  let tmpObj = [];
  array.map(el => {
    let x = {};
    let b = clients[el];
    for (let key in b) {
      x[key] = b[key];
    }
    tmpObj.push(x);
    return 0;
  });
  return tmpObj;
};

export default createSelector(
  clientsSelector,
  filteredClients,
  getClients
);
