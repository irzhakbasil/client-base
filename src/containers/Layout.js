import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchClients } from "../store/actions/fetchClients";
import { selectClient } from "../store/actions/selectClient";
import { searchUpdater } from "../store/actions/searchUpdater";
import { updateSearchTerm } from "../store/actions/updateSearchTerm";

import "./Layout.css";

import SearchBar from "../components/SearchBar/SearchBar";
import ClientList from "../components/ClientsList/ClientsList";
import ClientInfo from "../components/ClientInfo/ClientInfo";

class Layout extends Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  inputChange = text => {
    let getIndexesArray = function(arr, serchTerm) {
      //maybe I can create another reselect
      // file to handle this logic?
      let getKeyValues = function(arr) {
        let tmpObj = [];
        for (let a in arr) {
          let tmp = arr[a];
          for (let c in tmp) {
            if (c !== "avatar") {
              tmpObj.push(tmp[c]);
            }
          }
        }
        return tmpObj;
        console.log(tmpObj);
      };
      let indexes = arr
        .map((client, index) => {
          let x = getKeyValues(client);
          x = x.filter(v => v.toLowerCase().includes(serchTerm.toLowerCase()));
          if (x.length > 0) return index.toString();
        })
        .filter(el => el);
      return indexes;
    };
    const matches = getIndexesArray(this.props.clients, text);
    this.props.updateSearchTerm(text);
    this.props.searchUpdater(
      matches.map(el => {
        return Number(el);
      })
    );
  };

  filteredClick = obj => {
    const selected = {};
    for (let key in obj) {
      selected[key] = obj[key];
    }
    this.props.selectClient(selected);
  };

  render() {
    return (
      <div className="layout">
        <div className="left-panel">
          <SearchBar inputChange={this.inputChange} />
          <ClientList
            searchTerm={this.props.searchTerm}
            filteredClick={this.filteredClick}
            clients={this.props.clients}
            error={this.props.error}
          />
        </div>
        <div className="right-panel">
          <ClientInfo client={this.props.selectedClient} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchTerm: state.clientReducer.searchTerm,
    clients: state.clientReducer.clients,
    error: state.clientReducer.error,
    selectedClient: state.clientReducer.selectedClient
  };
};

export default connect(
  mapStateToProps,
  { fetchClients, selectClient, searchUpdater, updateSearchTerm }
)(Layout);
