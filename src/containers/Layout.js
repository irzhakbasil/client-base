import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchClients } from "../store/actions/fetchClients";
import { selectClient } from "../store/actions/selectClient";
import { searchUpdater } from "../store/actions/searchUpdater";

import "./Layout.css";

import SearchBar from "../components/SearchBar/SearchBar";
import ClientList from "../components/ClientsList/ClientsList";
import ClientInfo from "../components/ClientInfo/ClientInfo";

class Layout extends Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  selectClient = index => {
    const selected = {
      address: { ...this.props.clients[index].address },
      contact: { ...this.props.clients[index].contact },
      general: { ...this.props.clients[index].general },
      job: { ...this.props.clients[index].job }
    };
    this.props.selectClient(selected);
  };

  inputChange = text => {
    let getIndexesArray = function(arr, serchTerm) {
      let objFilter = function(arr) {
        let tmpObj = [];
        for (let a in arr) {
          let tmp = arr[a];
          for (let c in tmp) {
            tmpObj.push(tmp[c]);
          }
        }
        return tmpObj;
      };
      let indexes = arr
        .map((client, index) => {
          let x = objFilter(client);
          x = x.filter(v => v.toLowerCase().includes(serchTerm.toLowerCase()));
          if (x.length > 0) return index;
        })
        .filter(function(el) {
          return el;
        });
      return indexes;
    };
    const matches = getIndexesArray(this.props.clients, text);
    this.props.searchUpdater(matches);
  };

  render() {
    return (
      <div className="layout">
        <div className="left-panel">
          <SearchBar inputChange={this.inputChange} />
          <ClientList clients={this.props.clients} click={this.selectClient} />
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
    clients: state.clientReducer.clients,
    selectedClient: state.clientReducer.selectedClient
  };
};

export default connect(
  mapStateToProps,
  { fetchClients, selectClient, searchUpdater }
)(Layout);
