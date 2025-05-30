import { Star } from "lucide-react";

export function FavouritesComponent({ isFavourite, onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn"
      title={isFavourite ? "Remove from favourites" : "Add to favourites"}
    >
      <Star
        size={20}
        fill={isFavourite ? "gold" : "none"}
        stroke={isFavourite ? "gold" : "black"}
      />
      <span>{isFavourite ? "Favourite" : "Add"}</span>
    </button>
  );
}
