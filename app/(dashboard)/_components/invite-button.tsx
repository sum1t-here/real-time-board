import { Plus } from 'lucide-react';
import { OrganizationProfile } from '@clerk/nextjs';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Invite Members
        </Button>
      </DialogTrigger>
      <DialogContent
        className="p-0 bg-transparent flex flex-col border-none shadow-none justify-center items-center"
        showCloseButton={false}
      >
        <OrganizationProfile routing="hash" />
        <DialogClose className="flex items-end w-full" asChild>
          <Button className="bg-red-700 w-[400px] hover:bg-red-600">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
