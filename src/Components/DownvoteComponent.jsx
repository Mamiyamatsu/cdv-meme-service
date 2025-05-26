import { ThumbsDown } from "lucide-react";

export function DownvoteComponent({ count, onClick }) {
    return (
        <button onClick={onClick} className="btn">
            <ThumbsDown size={20}/>
            <span>{count}</span>
        </button>
    )
}