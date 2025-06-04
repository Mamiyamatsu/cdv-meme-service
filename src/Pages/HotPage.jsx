import { useSelector, useDispatch } from "react-redux";
import { MemeComponent } from "../Components/MemeComponent";
import { toggleFavourite, upvoteMeme, downvoteMeme } from "../store/memesReducer";

export function HotPage() {
  const memes = useSelector((state) => state.memes);
  const dispatch = useDispatch();

  const hotMemes = memes.filter((meme) => meme.upvotes >= 10);

  return (
    <div>
      <MemeComponent
        memes={hotMemes}
        handleUpvote={(id) => dispatch(upvoteMeme(id))}
        handleDownvote={(id) => dispatch(downvoteMeme(id))}
        toggleFavourite={(id) => dispatch(toggleFavourite(id))}
      />
    </div>
  );
}
