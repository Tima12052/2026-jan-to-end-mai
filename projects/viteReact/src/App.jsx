import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Gallery from "./components/Gallery";
import paintings from "./paintings.json";

function App() {

  return (
    <>
      <Gallery items={paintings}/>
    </>
  );
}

export default App;
