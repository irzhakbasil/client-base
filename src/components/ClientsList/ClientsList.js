import React from "react";
import "./ClientsList.css";

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
  return <div className="client_list">{clientsList}</div>;
};

export default ClientList;
