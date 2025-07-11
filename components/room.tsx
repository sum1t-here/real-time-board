"use client";

import { ReactNode } from "react";
import {ClientSideSuspense, LiveblocksProvider} from "@liveblocks/react";
import { RoomProvider } from "@liveblocks/react";

interface RoomProps {
    children: ReactNode;
    roomId: string;
    fallback: NonNullable<ReactNode> | null;
}

export const Room = ({ children, roomId, fallback}: RoomProps) => {
    return(
        <LiveblocksProvider publicApiKey="pk_dev_3Dr-mcYwLLAzggK3EFTCk08ur11PioucU_ODVdepoNNxaFrA3n3Wn47m2O3-eFwR">
        <RoomProvider id={roomId}>
            <ClientSideSuspense fallback={fallback}>
                {children}
            </ClientSideSuspense>
        </RoomProvider>
        </LiveblocksProvider>
    );
}