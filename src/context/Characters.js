import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [name, setName] = useState("");

  useEffect(() => {
    getCharacters();
  }, [page, limit, name]);

  const getCharacters = async () => {
    console.log({ page, limit, name });
    const { data } = await axios.get(
      `https://www.breakingbadapi.com/api/characters`,
      {
        params: {
          limit,
          offset: (page - 1) * limit,
          name,
        },
      }
    );
    setCharacters(data);
  };

  const value = { characters, setCharacters, page, setPage, name, setName };
  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};
