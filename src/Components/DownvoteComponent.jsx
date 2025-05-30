import { ThumbsDown } from "lucide-react";
import "../Styles/Main.css"

export function DownvoteComponent({ count, onClick }) {
    return (
        <button onClick={onClick} className="btn">
            <ThumbsDown className="icon" size={20}/>
            <span>{count}</span>
        </button>
    )
}