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

  useEffect(() => {
    setPage(1);
  }, [name]);

  const nextPage = () => {
    if (characters.length) {
      setPage((p) => p + 1);
    }
  };

  const prevPage = () => {
    setPage((p) => (p > 1 ? p - 1 : p));
  };

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

  const value = {
    characters,
    setCharacters,
    page,
    setPage,
    name,
    setName,
    nextPage,
    prevPage,
  };
  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};
