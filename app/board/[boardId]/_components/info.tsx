'use clients';

import { Hint } from '@/app/(dashboard)/_components/hint';
import { Actions } from '@/components/actions';
import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { cn } from '@/lib/utils';
import { useRenameModal } from '@/store/use-rename-modal';
import { useQuery } from 'convex/react';
import { Menu } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
});

const TabSeperator = () => {
  return <div className="text-neutral-300 px-1.5">|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.board.get, {
    id: boardId as Id<'boards'>,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button asChild variant="board">
          <Link href={'/'}>
            <Image src="/logo.svg" alt="Board logo" height={25} width={40} />
            <span className={cn('font-semibold text-xl ml-2 text-black', font.className)}>
              Board
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeperator />
      <Hint label="Edit title" side="bottom" sideOffset={10}>
        <Button
          variant="board"
          className="text-base font-normal px-2"
          onClick={() => {
            onOpen(data?._id, data?.title);
          }}
        >
          {data?.title}
        </Button>
      </Hint>
      <TabSeperator />
      <Actions id={data?._id} title={data?.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={10}>
            <Button size="icon" variant="board">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
};
