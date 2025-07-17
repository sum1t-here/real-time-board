import { Room } from '@/components/room';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { auth } from '@clerk/nextjs/server';
import { fetchQuery } from 'convex/nextjs';
import { redirect } from 'next/navigation';
import { Canvas } from './_components/canvas';
import { Loading } from './_components/loading';

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}
const BoardIdPage = async ({ params }: BoardIdPageProps) => {
  const orgId = (await auth()).orgId;
  const boardIdParams = await params;
  const boardId = boardIdParams.boardId;
  const board = await fetchQuery(api.board.get, { id: boardId as Id<'boards'> });

  if (board?.orgId !== orgId) {
    return redirect('/unauthorised');
  }

  return (
    <div className="h-screen w-screen">
      <Room roomId={boardId} fallback={<Loading />}>
        <Canvas boardId={boardId} />
      </Room>
    </div>
  );
};

export default BoardIdPage;
