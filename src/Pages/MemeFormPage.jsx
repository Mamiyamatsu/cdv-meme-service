import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMeme } from "../store/memesReducer";
import { useNavigate } from "react-router";

export function MemeFormPage() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMeme = {
      title,
      img: URL.createObjectURL(image),
      upvotes: 0,
      downvotes: 0,
      isFavourite: false,
    };

    dispatch(addMeme(newMeme));
    navigate("/");
  };

  return (
    <div className="meme-form">
      <h2>Dodaj nowego mema</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tytuł:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Obraz:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button type="submit">Dodaj mema</button>
      </form>
    </div>
  );
};