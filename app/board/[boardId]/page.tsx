import { Room } from "@/components/room";
import { Canvas } from "./_components/canvas"
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
    params: {
        boardId: string;
    };
};

const BoardIdPage = ({ params }: BoardIdPageProps) => {
    return (
        <div className="h-screen w-screen">
            <Room roomId={params.boardId} fallback={<Loading/>}>
                <Canvas boardId = {params.boardId}/>
            </Room>
        </div>
    )
}

export default BoardIdPage