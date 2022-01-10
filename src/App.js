import React from "react";
import { Context } from "./models/ChatRoomsContext";
import WebAppContainer from "./modules/WebAppContainer/WebAppContainer";

function App() {

  return (
    <Context >
      <WebAppContainer />
    </Context>
  );
}

export default App;
