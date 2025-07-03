"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hint } from "../hint";

export const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <Hint
                        label="Create Organization"
                        side="right"
                        align="center"
                    >
                        <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
                            <Plus className="text-white"/>
                        </button>
                    </Hint>
                </div>
            </DialogTrigger>
            <DialogContent className="bg-transparent border-none pb-24 max-w-[300px] shadow-none flex">
                <CreateOrganization/>
            </DialogContent>
        </Dialog>
    );
};