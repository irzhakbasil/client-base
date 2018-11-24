import React from "react";
import "./ClientListItem.css";

const ClientListItem = props => {
  let { client, filteredClick } = props;
  return (
    <div className="client-wrapper" onClick={() => filteredClick(client)}>
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
};

export default ClientListItem;
