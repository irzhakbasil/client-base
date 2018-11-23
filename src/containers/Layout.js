import React, { Component } from "react";

import "./Layout.css";

import SearchBar from "../components/SearchBar/SearchBar";
import ClientList from "../components/ClientsList/ClientsList";
import ClientInfo from "../components/ClientInfo/ClientInfo";

class Layout extends Component {
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

export default Layout;
