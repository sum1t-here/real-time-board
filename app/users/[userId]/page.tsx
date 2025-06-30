interface UserIdPageProps {
    params: {
        userId: string;
    };
};

const Page = ({
    params,
}: UserIdPageProps) => {
    return (
        <div>
            User id: {params.userId}
        </div>
    );
};

export default Page;