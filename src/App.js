import React from "react";
import Webappcontainer from "./components/WebAppContainer";
import { Context } from "./models/ChatRoomsContext";

function App() {

  return (
    <Context >
      <Webappcontainer />
    </Context>
  );
}

export default App;
