import Image from 'next/image';

export const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="./empty-favorites.svg" height={500} width={500} alt="empty search" />
      <h2 className="text-2xl font-semibold">No favorites board!</h2>
      <p className="text-muted-foreground text-sm mt-2">Try favoriting a board</p>
    </div>
  );
};
