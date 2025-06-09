import { MemesPage } from "./MemesPage";

export function FavouritesPage() {
  return (
    <MemesPage
      filterFn={(meme) => meme.isFavourite}
      emptyMessage="Nie masz ulubionych memów..."
    />
  );
}
