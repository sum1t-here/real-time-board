'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@clerk/nextjs';
import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
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
  return (
    <div>
      <Link href={`/board/${id}`}>
        <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden p-4">
          <div className="relative flex-1 bg-amber-50">
            <Image src={imageUrl} alt="doodle" fill className="object-fill p-4" />
            <Overlay />
          </div>
          <Footer
            isFavorite={isFavorite}
            title={title}
            authorLabel={authorLabel}
            createdAtLabel={createdAtLabel}
            onClick={() => {}}
            disabled={false}
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
