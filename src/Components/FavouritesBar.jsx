import { useSelector } from "react-redux";
import "../Styles/Aside.css"

export function FavouritesBar() {
  const memes = useSelector((state) => state.memes)
  const favouriteMemes = memes.filter((meme) => meme.isFavourite);

  return (
    <div className="favourites-bar">
      <h3>Ulubione: ({favouriteMemes.length})</h3>
      <div className="favourite-thumbnails">
        {favouriteMemes.map((meme, i) => (
          <img src={meme.img} alt="mini" key={meme.id} />
        ))}
      </div>
      <a href="/favourites">See all</a>
    </div>
  );
}
