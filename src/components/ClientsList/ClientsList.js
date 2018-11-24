import React from "react";
import "./ClientsList.css";
import filteredClientsSelector from "../../selectors/filteredClientsSelector";
import { connect } from "react-redux";

const ClientList = props => {
  console.log(props);
  let clientsList = (
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  );
  if (props.clients) {
    clientsList = props.clients.map((client, index) => {
      return (
        <div
          className="client-wrapper"
          key={client.contact.email}
          onClick={() => props.click(index)}
        >
          <div className="client-avatar">
            <img src={client.general.avatar} alt={client.general.lastName} />
          </div>
          <div className="client_short-info">
            <h4>
              {client.general.firstName} {client.general.lastName}
            </h4>
            <p>
              {client.job.title} {"in"} {client.job.company}
            </p>
          </div>
        </div>
      );
    });
  }
  if (props.fclients && props.fclients.length > 0) {
    clientsList = props.fclients.map((client, index) => {
      return (
        <div
          className="client-wrapper"
          key={client.contact.email}
          onClick={() => props.filteredClick(client)}
        >
          <div className="client-avatar">
            <img src={client.general.avatar} alt={client.general.lastName} />
          </div>
          <div className="client_short-info">
            <h4>
              {client.general.firstName} {client.general.lastName}
            </h4>
            <p>
              {client.job.title} {"in"} {client.job.company}
            </p>
          </div>
        </div>
      );
    });
  }
  if (props.searchTerm.length > 0 && props.fclients.length === 0) {
    clientsList = <div className="no-matches">No matching records</div>;
  }
  if (props.error) clientsList = <div className="error">{props.error}</div>;
  return <div className="client_list">{clientsList}</div>;
};

const mapStateToProps = state => {
  return {
    fclients: filteredClientsSelector(state)
  };
};

export default connect(mapStateToProps)(ClientList);
