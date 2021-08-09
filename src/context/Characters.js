import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useQuery from "../hooks/useQuery";

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  const iPage = parseInt(useQuery("page")) || 1;
  const [page, setPage] = useState(iPage);

  const [limit, setLimit] = useState(10);

  const iName = useQuery("name") || "";
  const [name, setName] = useState(iName);

  const [first, setFirst] = useState(true);

  const history = useHistory();

  console.log({ iPage, page });

  useEffect(() => {
    setPage(iPage);
  }, [iPage]);

  useEffect(() => {
    setName(iName);
  }, [iName]);

  useEffect(() => {
    getCharacters();
  }, [page, limit, name]);

  useEffect(() => {
    if (first) {
      setFirst(false);
      return;
    }
    setPage(1);
  }, [name]);

  const search = ({ target: { value } }) => {
    setName(value);
    history.push(`?page=${1}&name=${value}`);
  };

  const nextPage = () => {
    if (characters.length) {
      setPage((p) => p + 1);
      history.push(`?page=${page + 1}&name=${name}`);
      window.scrollTo(0, ".Search");
    }
  };

  const prevPage = () => {
    setPage((p) => (p > 1 ? p - 1 : p));
    history.push(`?page=${page - 1}&name=${name}`);
    window.scrollTo(0, ".Search");
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
    limit,
    setLimit,
    nextPage,
    prevPage,
    search,
  };
  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};
