import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
  // Declare `user` variable outside of the JSX
  const {user} = useSelector(store=>store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {withCredentials: true});
      if(res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

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
            <li className="hover:text-[#F83002] cursor-pointer"><Link to={"/"}>Home</Link></li>
            <li className="hover:text-[#F83002] cursor-pointer"><Link to={"/jobs"}>Jobs</Link></li>
            <li className="hover:text-[#F83002] cursor-pointer"><Link to={"/browse"}>Browse</Link></li>
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
                    src={user?.profile?.profilePhoto}
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
                      src={user?.profile?.profilePhoto}
                      alt="Profile Picture"
                    />
                  </Avatar>
                  <div>
                    <h1 className="font-medium text-lg">{user?.fullname}</h1>
                    <p className="text-sm text-gray-500">
                      {user?.bio}
                    </p>
                  </div>
                </div>
                {/* Buttons */}
                <div className="flex flex-col gap-3">
                  <Button variant="link" className="text-blue-500 hover:underline">
                    <Link to={"/profile"}>View Profile</Link>
                  </Button>
                  <Button onClick={logOutHandler} variant="link" className="text-red-500 hover:underline">
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
