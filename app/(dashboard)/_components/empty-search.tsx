import Image from 'next/image';

export const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="./empty-search.svg" height={500} width={500} alt="empty search" />
      <h2 className="text-2xl font-semibold">No results found!</h2>
      <p className="text-muted-foreground text-sm mt-2">Try searching for something else</p>
    </div>
  );
};
