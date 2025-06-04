import { useSelector } from "react-redux";
import { Link } from "react-router";
import { useState } from "react";
import "../Styles/Aside.css";

export function FavouritesBar() {
  const memes = useSelector((state) => state.memes);
  const favouriteMemes = memes.filter((meme) => meme.isFavourite);
  const [selectedMeme, setSelectedMeme] = useState(null);

  return (
    <div className="favourites-bar">
      <h3>Ulubione: ({favouriteMemes.length})</h3>
      <div className="favourite-thumbnails">
        {favouriteMemes.map((meme, i) => (
          <img
            src={meme.img}
            alt="mini"
            key={meme.id}
            onClick={() => setSelectedMeme(meme)}
          />
        ))}
      </div>
      <Link to="/favourites"><button>Zobacz wszystkie</button></Link>

      {selectedMeme && (
        <div className="large-meme" onClick={() => setSelectedMeme(null)}>
          <div
            className="large-meme-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedMeme.title}</h2>
            <img src={selectedMeme.img} alt={selectedMeme.title} />
            <button onClick={() => setSelectedMeme(null)}>Zamknij</button>
          </div>
        </div>
      )}
    </div>
  );
}
