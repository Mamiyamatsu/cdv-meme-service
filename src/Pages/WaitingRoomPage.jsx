import { useSelector, useDispatch } from "react-redux";
import { toggleFavourite, upvoteMeme, downvoteMeme } from "../store/actions";
import { MemeComponent } from "../Components/MemeComponent";

export function WaitingRoomPage() {
  const memes = useSelector((state) => state.memes);
  const dispatch = useDispatch();


  const waitingRoomMemes = memes.filter((meme) => meme.upvotes <= 2);

  return (
    <div>
       <MemeComponent
        memes={waitingRoomMemes}
        handleUpvote={(id) => dispatch(upvoteMeme(id))}
        handleDownvote={(id) => dispatch(downvoteMeme(id))}
        toggleFavourite={(id) => dispatch(toggleFavourite(id))}
      />
    </div>
  );
}