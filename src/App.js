import React from "react";
import Webappcontainer from "./components/WebAppContainer";
import { FETCHED_DATA } from "./models/sessionChats";

function App() {
  const Context = React.createContext(FETCHED_DATA);

  return (
    <Context.Provider value={FETCHED_DATA} >
      <Webappcontainer />
    </Context.Provider>
  );
}

export default App;
