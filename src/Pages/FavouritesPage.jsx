import { useMemes } from "../Context/MemeContext";
import { MemeComponent } from "../Components/MemeComponent";

export function FavouritesPage() {
  const { memes, handleUpvote, handleDownvote, toggleFavourite } = useMemes();
  const favouriteMemes = memes.filter((meme) => meme.isFavourite);

  return (
    <div>
      <h1>Favourite memes</h1>
      {favouriteMemes.length === 0 ? (
        <p>No favourite memes...</p>
      ) : (
        <div>
        <MemeComponent
          memes={favouriteMemes}
          handleUpvote={handleUpvote}
          handleDownvote={handleDownvote}
          toggleFavourite={toggleFavourite}
        />
      </div>
      )}
    </div>
  );
}
