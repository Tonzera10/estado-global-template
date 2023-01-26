import Router from "./Router/Router";
import styled from "styled-components";
import GlobalState from "./contexts/GlobalState";

export default function App() {
  return (
    <GlobalState>
      <AppContainer>
        <h1 id="frutinhas">
          Labefrutas{" "}
          <span role="img" aria-label="frutinhas">
            🍌 🍉 🍇 🍓{" "}
          </span>
        </h1>
        <Router />
      </AppContainer>
    </GlobalState>
  );
}
const AppContainer = styled.div`
  text-align: center;
`;
