import { MemesPage } from "./MemesPage";

export function RegularPage() {
  return (
    <MemesPage
      filterFn={(meme) => meme.upvotes > 2 && meme.upvotes < 10}
      emptyMessage="Brak zwykłych memów!"
    />
  );
}
