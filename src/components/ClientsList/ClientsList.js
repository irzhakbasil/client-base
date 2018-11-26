import React from "react";
import "./ClientsList.css";
import filteredClientsSelector from "../../selectors/filteredClientsSelector";
import { connect } from "react-redux";
import ClientListItem from "./ClientListItem/ClientListItem";

const ClientList = props => {
  let clientsList = (
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  );
  if (props.clients) {
    clientsList = props.clients.map((client, index) => {
      return (
        <ClientListItem
          key={index}
          client={client}
          filteredClick={props.filteredClick}
        />
      );
    });
  }
  if (props.fclients && props.fclients.length > 0) {
    clientsList = props.fclients.map((client, index) => {
      return (
        <ClientListItem
          key={index}
          client={client}
          filteredClick={props.filteredClick}
        />
      );
    });
  }
  if (props.searchTerm.length > 0 && props.fclients.length === 0) {
    clientsList = <div className="no-matches">No matching records</div>;
  }
  if (props.error)
    clientsList = (
      <div className="error">
        {props.error}
        {", "}
        {"Make sure that you are connected to internet and reload the page"}
      </div>
    );
  return <div className="client_list">{clientsList}</div>;
};

const mapStateToProps = state => {
  return {
    fclients: filteredClientsSelector(state)
  };
};

export default connect(mapStateToProps)(ClientList);
