import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useState } from "react";
import "../Styles/Aside.css";

export function FavouritesBar() {
  const memes = useSelector((state) => state.memes);
  const favouriteMemes = memes.filter((meme) => meme.isFavourite);
  const [selectedMeme, setSelectedMeme] = useState(null);

  const showBigMeme = (meme) => setSelectedMeme(meme);
  const hideBigMeme = () => setSelectedMeme(null);

  return (
    <div className="favourites-bar">
      <h3>Ulubione: ({favouriteMemes.length})</h3>
      <div className="favourite-thumbnails">
        {favouriteMemes.map((meme, i) => (
          <img
            src={meme.img}
            alt="mini"
            key={meme.id}
            onClick={() => showBigMeme(meme)}
          />
        ))}
      </div>
      <Link to="/favourites">
        <button>Zobacz wszystkie</button>
      </Link>

      {selectedMeme && (
        <div className="large-meme" onClick={hideBigMeme}>
          <div
            className="large-meme-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedMeme.title}</h2>
            <img src={selectedMeme.img} alt={selectedMeme.title} />
            <button onClick={hideBigMeme}>Zamknij</button>
          </div>
        </div>
      )}
    </div>
  );
}
