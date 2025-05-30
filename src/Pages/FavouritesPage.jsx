import { useMemes } from "../Context/MemeContext";

export function FavouritesPage() {
  const { memes } = useMemes();
  const favouriteMemes = memes.filter((m) => m.isFavourite);

  return (
    <div>
      <h1>Favourite memes</h1>
      {favouriteMemes.length === 0 ? (
        <p>No favourite memes...</p>
      ) : (
        favouriteMemes.map((meme, index) => (
          <div key={index}>
            <h2>{meme.title}</h2>
            <img src={meme.img} alt={meme.title} />
          </div>
        ))
      )}
    </div>
  );
}
