import { UpvoteComponent } from "./UpvoteComponent";
import { DownvoteComponent } from "./DownvoteComponent";
import { FavouritesComponent } from "./FavouritesComponent";
import "../Styles/Main.css";

export function MemeComponent({ memes, handleUpvote, handleDownvote, toggleFavourite }) {

  return (
    <div>
      {memes.map((meme) => (
        <div key={meme.id} className="meme">
          <h2 className="meme-title">{meme.title}</h2>
          <img src={meme.img} alt={meme.title} />
          <div className="buttons">
            <div>
              <UpvoteComponent
                count={meme.upvotes}
                onClick={() => handleUpvote(meme.id)}
              />
            </div>
            <div>
              <DownvoteComponent
                count={meme.downvotes}
                onClick={() => handleDownvote(meme.id)}
              />
            </div>
            <div>
              <FavouritesComponent
                isFavourite={meme.isFavourite}
                onClick={() => toggleFavourite(meme.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
