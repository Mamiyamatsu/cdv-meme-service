import { useSelector, useDispatch } from "react-redux";
import { toggleFavourite, upvoteMeme, downvoteMeme } from "../store/memesReducer";
import { MemeComponent } from "../Components/MemeComponent";

export function FavouritesPage() {
  const memes = useSelector((state) => state.memes);
  const dispatch = useDispatch();

  
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
        handleUpvote={(id) => dispatch(upvoteMeme(id))}
        handleDownvote={(id) => dispatch(downvoteMeme(id))}
        toggleFavourite={(id) => dispatch(toggleFavourite(id))}
      />
      </div>
      )}
    </div>
  );
}
