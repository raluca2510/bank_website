import React from "react";
import { clients } from "../../constants";
import * as C from "./styles";

const Clients = () => {
  return (
    <C.ClientsStyled>
      <C.Container>
        {clients.map((client) => (
          <C.Client key={client.id}>
            <C.Logo src={client.logo} alt="client-logo"></C.Logo>
          </C.Client>
        ))}
      </C.Container>
    </C.ClientsStyled>
  );
};

export { Clients };
