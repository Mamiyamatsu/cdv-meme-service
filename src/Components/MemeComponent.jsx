import { useState } from "react";
import MemesArray from "../MemesData/memesArray";
import { UpvoteComponent } from "./UpvoteComponent";

export function MemeComponent() {
  const [memes, setMemes] = useState(MemesArray);

  const handleUpvote = (index) => {
    const updated = [...memes];
    updated[index].upvotes += 1;
    setMemes(updated);
  };

  return (
    <div>
      {MemesArray.map((meme, index) => (
        <div key={index} className="meme">
          <h2>{meme.title}</h2>
          <img src={meme.img} alt={meme.title} />
          <div>
            <UpvoteComponent
              count={meme.upvotes}
              onClick={() => handleUpvote(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
