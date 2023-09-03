import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";



const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }


  return ( 
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
     
        <div className="ml-auto flex items-center space-x-4">
          
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};
 
export default Navbar;
