import { useMemes } from "../Context/MemeContext";
import { MemeComponent } from "../Components/MemeComponent";

export function RegularPage() {
  const { memes, handleUpvote, handleDownvote, toggleFavourite } = useMemes();
  const regularMemes = memes.filter((meme) => meme.upvotes < 10);

  return (
    <div>
      <MemeComponent
        memes={regularMemes}
        handleUpvote={handleUpvote}
        handleDownvote={handleDownvote}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
}
