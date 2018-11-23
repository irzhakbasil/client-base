import React from "react";

const ClientList = props => {
  let clintsList = <div>Loading</div>;
  if (props.clients) {
    clintsList = props.clients.map((client, index) => {
      return (
        <div className="client-wrapper" key={client.contact.email}>
          <div className="client-avatar">
            <img src={client.general.avatar} alt="picture" />
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
  return <div className="user_list">{clintsList}</div>;
};

export default ClientList;
