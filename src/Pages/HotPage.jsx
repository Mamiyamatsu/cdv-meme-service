import { useMemes } from "../Context/MemeContext";
import { MemeComponent } from "../Components/MemeComponent";
import "../Styles/Main.css";

export function HotPage() {
  const { memes, handleUpvote, handleDownvote, toggleFavourite } = useMemes();
  const hotMemes = memes.filter((meme) => meme.upvotes >= 10);

  return (
    <div>
      <MemeComponent
        memes={hotMemes}
        handleUpvote={handleUpvote}
        handleDownvote={handleDownvote}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
}
