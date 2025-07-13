import { Room } from '@/components/room';
import { Canvas } from './_components/canvas';
import { Loading } from './_components/loading';

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}
const BoardIdPage = async ({ params }: BoardIdPageProps) => {
    const boardIdParams = await params;
    const boardId = boardIdParams.boardId;
    return (
        <div className="h-screen w-screen">
            <Room roomId={boardId} fallback={<Loading />}>
                <Canvas boardId={boardId} />
      </Room>
    </div>
  );
};

export default BoardIdPage;
