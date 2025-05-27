import { UpvoteComponent } from "./UpvoteComponent";
import { DownvoteComponent } from "./DownvoteComponent";
import { useMemes } from "../Context/MemeContext";

export function MemeComponent() {
  const { memes, handleUpvote, handleDownvote } = useMemes();

  return (
    <div>
      {memes.map((meme, index) => (
        <div key={index} className="meme">
          <h2>{meme.title}</h2>
          <img src={meme.img} alt={meme.title} />
          <div>
            <UpvoteComponent
              count={meme.upvotes}
              onClick={() => handleUpvote(index)}
            />
          </div>
          <div>
            <DownvoteComponent
              count={meme.downvotes}
              onClick={() => handleDownvote(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
