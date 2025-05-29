import { useMemes } from "../Context/MemeContext";

export function FavouritesBar() {
  const { memes } = useMemes();
  const favouriteMemes = memes.filter((m) => m.isFavourite);

  return (
    <div className="favourites-bar">
      <h3>Ulubione: ({favouriteMemes.length})</h3>
      <div className="favourite-thumbnails">
        {favouriteMemes.map((meme, i) => (
          <img src={meme.img} alt="mini" key={i} />
        ))}
      </div>
      <a href="/favourites">See all</a>
    </div>
  );
}
