import { ThumbsUp } from "lucide-react";

export function UpvoteComponent({ count, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      <ThumbsUp size={20} />
      <span>{count}</span>
    </button>
  );
}
