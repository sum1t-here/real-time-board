import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CreateOrganization } from '@clerk/nextjs';
import Image from 'next/image';

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="max-w-full flex flex-col justify-center items-center">
        <Image src="./elements.svg" alt="elements" height={400} width={400} />
        <h2 className="text-2xl font-semibold mt-3">Welcome to Board</h2>
        <p className="text-muted-foreground text-sm mt-2">Create an organization to get started</p>
        <div className="mt-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">Create an organization</Button>
            </DialogTrigger>
            <DialogContent
              className="pt-7 bg-transparent border-none shadow-none flex flex-col items-center justify-center"
              showCloseButton={false}
            >
              <CreateOrganization />
              <DialogClose className="flex justify-center w-full" asChild>
                <Button className="bg-red-700 w-[435px] hover:bg-red-600">Close</Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};
