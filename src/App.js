import React from "react";
import Articals from "./components/Articals";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <header><h1>React Skeletons</h1></header>
      <div className="contact">
        <Articals/>
        <User/>
      </div>
    </div>
  );
}

export default App;
