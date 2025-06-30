import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedIn>
        This is a screen for Authenticated user only
        <UserButton/>
      </SignedIn>
    </div>
  );
}
