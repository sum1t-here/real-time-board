'use client';

import { Actions } from '@/components/actions';
import { Skeleton } from '@/components/ui/skeleton';
import { api } from '@/convex/_generated/api';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { useAuth } from '@clerk/nextjs';
import { formatDistanceToNow } from 'date-fns';
import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import { Footer } from './footer';
import { Overlay } from './overlay';

interface BoardCardProps {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  createdAt: number;
  imageUrl: string;
  orgId: string;
  isFavorite: boolean;
}

export const BoardCard = ({
  id,
  title,
  authorId,
  authorName,
  createdAt,
  imageUrl,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();

  const authorLabel = userId === authorId ? 'You' : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  const { mutate: favorite, pending: favoritePending } = useApiMutation(api.board.favorite);
  const { mutate: unFavorite, pending: unFavoritePending } = useApiMutation(api.board.unFavorite);

  const toogleFavorite = () => {
    if (isFavorite) {
      unFavorite({ id }).catch(() => toast.error('Failed to unfavorite'));
    } else {
      favorite({ id, orgId }).catch(() => toast.error('Failed to favorite'));
    }
  };

  return (
    <div>
      <Link href={`/board/${id}`}>
        <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
          <div className="relative flex-1 bg-amber-50">
            <Image src={imageUrl} alt="doodle" fill className="object-fill" />
            <Overlay />
            <Actions id={id} title={title} side="right">
              <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
                <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
              </button>
            </Actions>
          </div>
          <Footer
            isFavorite={isFavorite}
            title={title}
            authorLabel={authorLabel}
            createdAtLabel={createdAtLabel}
            onClick={toogleFavorite}
            disabled={favoritePending || unFavoritePending}
          />
        </div>
      </Link>
    </div>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="group aspect-[100/127] rounded-lg justify-between overflow-hidden p-4">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
