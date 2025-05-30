import { useMemes } from "../Context/MemeContext";
import { UpvoteComponent } from "../Components/UpvoteComponent";
import { DownvoteComponent } from "../Components/DownvoteComponent";
import { FavouritesComponent } from "../Components/FavouritesComponent";
import "../Styles/Main.css";

export function HotPage() {
  const { memes, handleUpvote, handleDownvote, toggleFavourite } = useMemes();

  const hotMemes = memes.filter((meme) => meme.upvotes >= 10);

  return (
    <div>
      <h1>🔥 Hot Memes 🔥</h1>
      {hotMemes.length === 0 ? (
        <p>No Hot Memes at the moment...</p>
      ) : (
        hotMemes.map((meme, index) => (
          <div key={index} className="meme">
            <h2>{meme.title}</h2>
            <img src={meme.img} alt={meme.title} />
            <div className="buttons">
              <div>
                <UpvoteComponent
                  count={meme.upvotes}
                  onClick={() => handleUpvote(index)}
                />
              </div>
              <div>
                <DownvoteComponent
                  count={meme.downvotes}
                  onClick={() => handleDownvote(index)}
                />
              </div>
              <div>
                <FavouritesComponent
                  isFavourite={meme.isFavourite}
                  onClick={() => toggleFavourite(index)}
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
