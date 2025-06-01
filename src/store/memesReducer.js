import memesArray from "../MemesData/memesArray";

const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
const UPVOTE_MEME = "UPVOTE_MEME";
const DOWNVOTE_MEME = "DOWNVOTE_MEME";

export const toggleFavourite = (id) => ({
  type: TOGGLE_FAVOURITE,
  payload: id,
});

export const upvoteMeme = (id) => ({
  type: UPVOTE_MEME,
  payload: id,
});

export const downvoteMeme = (id) => ({
  type: DOWNVOTE_MEME,
  payload: id,
});

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

    default:
      return state;
  }
};
