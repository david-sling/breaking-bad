import React from "react";
import Characters from "../components/Characters";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Search from "../components/Search";
import { CharactersProvider } from "../context/Characters";

export default function Home() {
  return (
    <CharactersProvider>
      <h1>BREAKING BAD CHARACTERS</h1>
      <Search />
      <Info />
      <Characters />
      <Info />
      <Footer />
    </CharactersProvider>
  );
}
