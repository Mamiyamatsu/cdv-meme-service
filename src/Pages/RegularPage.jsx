import { useSelector, useDispatch } from "react-redux";
import { toggleFavourite, upvoteMeme, downvoteMeme } from "../store/actions";
import { MemeComponent } from "../Components/MemeComponent";

export function RegularPage() {
  const memes = useSelector((state) => state.memes);
  const dispatch = useDispatch();


  const regularMemes = memes.filter((meme) => meme.upvotes > 2 && meme.upvotes < 10);

  return (
    <div>
       <MemeComponent
        memes={regularMemes}
        handleUpvote={(id) => dispatch(upvoteMeme(id))}
        handleDownvote={(id) => dispatch(downvoteMeme(id))}
        toggleFavourite={(id) => dispatch(toggleFavourite(id))}
      />
    </div>
  );
}
