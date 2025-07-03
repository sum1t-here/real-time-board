import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const EmptyBoards = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="./notes.svg" height={250} width={250} alt="empty search" />
      <h2 className="text-2xl font-semibold">Create your first board!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <Button className="mt-6">Create Board</Button>
    </div>
  );
};
