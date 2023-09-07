import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import MainNav from './main-nav'
const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    
      <div className="flex min-h-[8vh] items-center px-4 bg-purpleNav">
        <div className="w-[100%] flex justify-around items-center space-x-4">
          <MainNav />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

  );
};

export default Navbar;
