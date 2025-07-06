'use client';

import { useQuery } from 'convex/react';

import { api } from '@/convex/_generated/api';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { EmptySearch } from './empty-search';
import { EmptyFavorites } from './empty-favorites';
import { EmptyBoards } from './empty-board';
import { BoardCard } from './board-card';
import { NewBoardButton } from './new-board-button';

interface BoardListProps {
  orgId: string;
}

export const BoardList = ({ orgId }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId });

  const searchParams = useSearchParams();

  // Use useMemo to safely unwrap dynamic param access
  const search = useMemo(() => searchParams.get('search'), [searchParams]);
  const favorites = useMemo(() => searchParams.get('favorites'), [searchParams]);

  // check for convex
  if (data === undefined) {
    return <div>Loading...</div>;
  }

  if (!data?.length && search) {
    return (
      <div>
        <EmptySearch />
      </div>
    );
  }

  if (!data.length && favorites) {
    return (
      <div>
        <EmptyFavorites />
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div>
        <EmptyBoards />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl">{favorites ? 'Favorite Board' : 'Team Boards'}</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-2">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorName={board.authorName}
            authorId={board.authorId}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
};
