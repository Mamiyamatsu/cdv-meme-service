import { MemesPage } from "./MemesPage";

export function HotPage() {
  return (
    <MemesPage
      filterFn={(meme) => meme.upvotes >= 10}
      emptyMessage="Brak gorących memów!"
    />
  );
}
