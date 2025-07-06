'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { toast } from 'sonner';

import { api } from '@/convex/_generated/api';
import { useOrganization } from '@clerk/nextjs';
import { useApiMutation } from '@/hooks/use-api-mutation';

export const EmptyBoards = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const createBoard = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: 'Untitled',
    })
      .then((id) => {
        toast.success('Board created sucessfully !!!');
        // TODO: Redirected to board/id
      })
      .catch(() => {
        toast.error('Failed to create board.');
      });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="./notes.svg" height={250} width={250} alt="empty search" />
      <h2 className="text-2xl font-semibold">Create your first board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <Button
        disabled={pending}
        onClick={createBoard}
        className="mt-6 hover:cursor-pointer hover:bg-[#3F3F3F]"
      >
        Create Board
      </Button>
    </div>
  );
};
