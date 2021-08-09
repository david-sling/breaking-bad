import React, { useContext } from "react";
import { CharactersContext } from "../context/Characters";

export default function Footer() {
  const {
    nextPage,
    prevPage,
    characters: { length },
    page,
  } = useContext(CharactersContext);
  return (
    <div className="Footer">
      {page > 1 && <button onClick={prevPage}>PREVIOUS</button>}
      {length == 10 && <button onClick={nextPage}>NEXT</button>}
      {!length && <p>END OF RESULTS</p>}
    </div>
  );
}
