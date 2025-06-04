import { Star } from "lucide-react";
import "../Styles/Main.css";

export function FavouritesComponent({ isFavourite, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn favourite-btn ${isFavourite ? "favourite" : ""}`}
      title={isFavourite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
    >
      <Star className="favourite-icon" size={20} />
      <span>{isFavourite ? "Ulubione" : "Dodaj"}</span>
    </button>
  );
}
