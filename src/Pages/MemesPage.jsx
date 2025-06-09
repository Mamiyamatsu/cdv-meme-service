import { useSelector, useDispatch } from "react-redux";
import { toggleFavourite, upvoteMeme, downvoteMeme } from "../store/actions";
import { MemeComponent } from "../Components/MemeComponent";

export function MemesPage({ filterFn, emptyMessage }) {
  const memes = useSelector((state) => state.memes);
  const dispatch = useDispatch();

  const filteredMemes = memes.filter(filterFn);

  return (
    <div>
      {filteredMemes.length === 0 ? (
        <p>
          <b>{emptyMessage}</b>
        </p>
      ) : (
        <MemeComponent
          memes={filteredMemes}
          handleUpvote={(id) => dispatch(upvoteMeme(id))}
          handleDownvote={(id) => dispatch(downvoteMeme(id))}
          toggleFavourite={(id) => dispatch(toggleFavourite(id))}
        />
      )}
    </div>
  );
}
