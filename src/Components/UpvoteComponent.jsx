import { ThumbsUp } from "lucide-react";
import "../Styles/Main.css"

export function UpvoteComponent({ count, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      <ThumbsUp size={20} />
      <span>{count}</span>
    </button>
  );
}
