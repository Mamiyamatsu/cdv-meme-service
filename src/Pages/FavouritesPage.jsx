import { useSelector, useDispatch } from "react-redux";
import { toggleFavourite, upvoteMeme, downvoteMeme } from "../store/actions";
import { MemeComponent } from "../Components/MemeComponent";

export function FavouritesPage() {
  const memes = useSelector((state) => state.memes);
  const dispatch = useDispatch();

  
  const favouriteMemes = memes.filter((meme) => meme.isFavourite);

  return (
    <div>
      {favouriteMemes.length === 0 ? (
        <p><b>Nie masz ulubionych memów...</b></p>
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
