import React from "react";
import Header from "./components/Header";
import Directory from "./components/Directory";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Directory />
      </Wrapper>
    </div>
  );
}

export default App;
