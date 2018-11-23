import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchClients } from "../store/actions/fetchClients";

import "./Layout.css";

import SearchBar from "../components/SearchBar/SearchBar";
import ClientList from "../components/ClientsList/ClientsList";
import ClientInfo from "../components/ClientInfo/ClientInfo";

class Layout extends Component {
  componentDidMount() {
    this.props.fetchClients();
    setTimeout(() => {
      console.log(this.props);
    }, 3000);
  }

  render() {
    return (
      <div className="layout">
        <div className="left-panel">
          <SearchBar />
          <ClientList />
        </div>
        <div className="right-panel">
          <ClientInfo />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchClients }
)(Layout);
