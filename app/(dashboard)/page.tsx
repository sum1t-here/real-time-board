'use client';

import { useOrganization } from '@clerk/nextjs';
import { BoardList } from './_components/board-list';
import { EmptyOrg } from './_components/empty-org';

const DashboardPage = () => {
  const { organization } = useOrganization();
  return (
    <div className="flex-1 h-[calc(100vh-80px)] p-6">
      {!organization ? <EmptyOrg /> : <BoardList orgId={organization.id} />}
    </div>
  );
};

export default DashboardPage;
