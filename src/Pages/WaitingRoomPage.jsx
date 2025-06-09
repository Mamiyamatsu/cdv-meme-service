import { MemesPage } from "./MemesPage";

export function WaitingRoomPage() {
  return (
    <MemesPage
      filterFn={(meme) => meme.upvotes <= 2}
      emptyMessage="Brak memów w poczekalni!"
    />
  );
}
