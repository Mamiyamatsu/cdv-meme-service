import { Star } from "lucide-react";

export function FavouritesComponent({ isFavourite, onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn"
      title={isFavourite ? "Remove from favourites" : "Add to favourites"}
    >
      <Star fill={isFavourite ? "currentColor" : "none"} />
      <span>{isFavourite ? "Favourites" : "Add"}</span>
    </button>
  );
}
