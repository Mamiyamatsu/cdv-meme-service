import MemesArray from "../MemesData/memesArray"

export function MemeComponent() {
  return (
    <div>
      {MemesArray.map((meme, index) => (
        <div key={index} className="meme">
          <h2>{meme.title}</h2>
          <img src={meme.img} alt={meme.title} />
        </div>
      ))}
    </div>
  );
}
