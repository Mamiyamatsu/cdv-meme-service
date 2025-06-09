import memesArray from "../MemesData/memesArray";
import {
  TOGGLE_FAVOURITE,
  UPVOTE_MEME,
  DOWNVOTE_MEME,
  ADD_MEME,
} from "./actions";

const initialState = {
  memes: memesArray,
};

export const memesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      return {
        ...state,
        memes: state.memes.map((meme) =>
          meme.id === action.payload
            ? { ...meme, isFavourite: !meme.isFavourite }
            : meme
        ),
      };

    case UPVOTE_MEME:
      return {
        ...state,
        memes: state.memes.map((meme) =>
          meme.id === action.payload
            ? { ...meme, upvotes: meme.upvotes + 1 }
            : meme
        ),
      };

    case DOWNVOTE_MEME:
      return {
        ...state,
        memes: state.memes.map((meme) =>
          meme.id === action.payload
            ? { ...meme, downvotes: meme.downvotes + 1 }
            : meme
        ),
      };

      case ADD_MEME:
        return {
          ...state,
          memes: [
            ...state.memes,
            action.payload,
          ],
        };

    default:
      return state;
  }
};
