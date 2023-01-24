import React from "react";
import About from "./components/AboutMe";
import SongList from "./components/SongList";
import Navbar from "./components/Nav";
import "./App.css"
function App() {


  let Page;
  switch (window.location.pathname) {
    default:
      Page = SongList
      break
    case "/songsaver":
      Page = SongList
      break
    case "/about":
      Page = About
      break
  }

  return (
    <div>
      <Navbar />
      <Page />

    </div>
  );

}

export default App;
