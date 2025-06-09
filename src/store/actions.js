import { v4 as uuidv4 } from "uuid";

export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
export const UPVOTE_MEME = "UPVOTE_MEME";
export const DOWNVOTE_MEME = "DOWNVOTE_MEME";
export const ADD_MEME = "ADD_MEME";

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

export const addMeme = (newMeme) => ({
  type: ADD_MEME,
  payload: {
    ...newMeme,
    id: uuidv4(),
  },
});