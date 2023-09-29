import "./App.css";
import React from "react";
import Header from "./components/header";
import Body from "./components/body";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body>
        <Body />
      </body>
    </div>
  );
}

export default App;
