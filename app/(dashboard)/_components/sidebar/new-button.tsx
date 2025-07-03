'use client';

import { Plus } from 'lucide-react';
import { CreateOrganization } from '@clerk/nextjs';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Hint } from '../hint';
import { Button } from '@/components/ui/button';

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint label="Create Organization" side="right" align="center">
            <button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent
        className="bg-transparent border-none shadow-none flex flex-col justify-center items-center"
        showCloseButton={false}
      >
        <CreateOrganization />
        <DialogClose className="flex justify-center w-full" asChild>
          <Button className="bg-red-700 w-[435px] hover:bg-red-600">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
