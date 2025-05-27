import { createContext, useContext, useState } from "react";
import memesArray from "../MemesData/memesArray";

const MemeContext = createContext();

export function MemeProvider({ children }) {
  const [memes, setMemes] = useState(memesArray);

  const handleUpvote = (index) => {
    const updated = [...memes];
    updated[index].upvotes += 1;
    setMemes(updated);
  };

  const handleDownvote = (index) => {
    const updated = [...memes];
    updated[index].downvotes += 1;
    setMemes(updated);
  };

  return (
    <MemeContext.Provider value={{ memes, handleUpvote, handleDownvote }}>
      {children}
    </MemeContext.Provider>
  );
}

export function useMemes() {
  return useContext(MemeContext);
}
