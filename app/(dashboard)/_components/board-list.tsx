'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { EmptySearch } from './empty-search';
import { EmptyFavorites } from './empty-favorites';
import { EmptyBoards } from './empty-board';

interface BoardListProps {
  orgId: string;
}

export const BoardList = ({ orgId }: BoardListProps) => {
  const data = [];

  const searchParams = useSearchParams();

  // Use useMemo to safely unwrap dynamic param access
  const search = useMemo(() => searchParams.get('search'), [searchParams]);
  const favorites = useMemo(() => searchParams.get('favorites'), [searchParams]);

  // if(!data?.length && query.search){
  //     return(
  //         <div>
  //             Try searching something else
  //         </div>
  //     );
  // };

  // if(!data.length && query.favorites){
  //     return(
  //         <div>
  //             No favorites
  //         </div>
  //     );
  // };

  // if(!data?.length){
  //     return(
  //         <div>
  //             No boards at all
  //         </div>
  //     );
  // };

  if (!data.length) {
    if (search) {
      return <EmptySearch />;
    }

    if (favorites) {
      return <EmptyFavorites />;
    }

    return <EmptyBoards />;
  }

  return <div></div>;
};
