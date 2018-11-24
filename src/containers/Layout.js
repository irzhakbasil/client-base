import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchClients } from "../store/actions/fetchClients";
import { selectClient } from "../store/actions/selectClient";

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

  render() {
    return (
      <div className="layout">
        <div className="left-panel">
          <SearchBar />
          <ClientList clients={this.props.clients} click={this.selectClient} />
        </div>
        <div className="right-panel">
          <ClientInfo clients={this.props.clients} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clientReducer.clients
  };
};

export default connect(
  mapStateToProps,
  { fetchClients, selectClient }
)(Layout);
