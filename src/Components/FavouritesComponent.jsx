import { Star } from "lucide-react";
import "../Styles/Main.css";

export function FavouritesComponent({ isFavourite, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn favourite-btn ${isFavourite ? "favourite" : ""}`}
      title={isFavourite ? "Remove from favourites" : "Add to favourites"}
    >
      <Star className="favourite-icon" size={20} />
      <span>{isFavourite ? "Favourite" : "Add"}</span>
    </button>
  );
}
