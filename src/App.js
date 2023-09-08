import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import { useState, useRef } from "react";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  const [searchText, setSearchText] = useState("");

  let searchRef = useRef(null);

  function focus() {
    searchRef.current?.focus();
  }

  return (
    <div className="App">
      <Header setSearchText={setSearchText} forwardref={searchRef} />
      {searchText.length === 0 ? (
        <LandingPage onClick={focus} />
      ) : (
        <Content searchText={searchText} />
      )}
    </div>
  );
}

export default App;
