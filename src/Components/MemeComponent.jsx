import { UpvoteComponent } from "./UpvoteComponent";
import { DownvoteComponent } from "./DownvoteComponent";
import { FavouritesComponent } from "./FavouritesComponent";
import "../Styles/Main.css";

export function MemeComponent({ memes, handleUpvote, handleDownvote, toggleFavourite }) {

  return (
    <div>
      {memes.map((meme, index) => (
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
      ))}
    </div>
  );
}
