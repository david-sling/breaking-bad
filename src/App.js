import React from "react";
import Characters from "./components/Characters";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Search from "./components/Search";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Info />
      <Characters />
      <Footer />
    </div>
  );
}
