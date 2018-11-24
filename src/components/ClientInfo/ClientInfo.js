import React from "react";
import "./ClientInfo.css";

const ClientInfo = props => {
  let clientInfo = (
    <div className="client-not-selected">Select a client to see info</div>
  );
  if (props.client) {
    const client = props.client;
    clientInfo = (
      <div className="client-selected">
        <div className="client-header-container">
          <img className="img-big" src={client.general.avatar} alt="" />
          <div className="client-header">
            <h3 className="client-name">
              {client.general.firstName} {client.general.lastName}
            </h3>
            <p className="job">
              {client.job.title} {"in"}
            </p>
            <p className="wokrplace"> {client.job.company}</p>
          </div>
        </div>
        <div className="info-wrapper">
          <div className="adress">
            <h4>Address: </h4>
            <p>
              <span className="text-highlight">Country: </span>
              {client.address.country}
            </p>
            <p>
              <span className="text-highlight">zipCode:</span>{" "}
              {client.address.zipCode}
            </p>
            <p>
              <span className="text-highlight">City: </span>
              {client.address.city}
            </p>
            <p>
              <span className="text-highlight">Street: </span>
              {client.address.street}
            </p>
          </div>
          <div className="contacts">
            <h4>Contacts: </h4>
            <p>
              <span className="text-highlight">mail: </span>
              {client.contact.email}
            </p>
            <p>
              <span className="text-highlight">Phone: </span>
              {client.contact.phone}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="client-fullinfo">
      <div>{clientInfo}</div>;
    </div>
  );
};

export default ClientInfo;
