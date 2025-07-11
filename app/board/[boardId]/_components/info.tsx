import { Skeleton } from "@/components/ui/skeleton";

export const Info = () => {
    return (
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
            Info about the board
        </div>
    );
};

Info.Skeleton = function InfoSkeleton() {
    return(
        <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]"/>
    );
};