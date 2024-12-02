import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Declare `user` variable outside of the JSX
  const user = false;

  return (
    <div className="bg-white shadow">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-6 h-16">
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>
          </h1>
        </div>

        {/* Navigation and Avatar */}
        <div className="flex items-center gap-8">
          {/* Navigation Links */}
          <ul className="flex items-center font-medium gap-6">
            <li className="hover:text-[#F83002] cursor-pointer">Home</li>
            <li className="hover:text-[#F83002] cursor-pointer">Jobs</li>
            <li className="hover:text-[#F83002] cursor-pointer">Browse</li>
          </ul>

          {/* Conditional Rendering */}
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login"><Button variant="outline">Login</Button></Link>
              <Link to="/signup"><Button className="bg-[#6A38C2]">Signup</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer w-10 h-10">
                  <AvatarImage
                    className="rounded-full"
                    src="https://github.com/shadcn.png"
                    alt="Profile Picture"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="p-4 border shadow-md rounded-lg w-64 bg-white">
                {/* User Info */}
                <div className="flex gap-4 mb-4">
                  <Avatar className="cursor-pointer w-12 h-12">
                    <AvatarImage
                      className="rounded-full"
                      src="https://github.com/shadcn.png"
                      alt="Profile Picture"
                    />
                  </Avatar>
                  <div>
                    <h1 className="font-medium text-lg">Vivek Namdev</h1>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <Button variant="link" className="text-blue-500 hover:underline">
                    View Profile
                  </Button>
                  <Button variant="link" className="text-red-500 hover:underline">
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
