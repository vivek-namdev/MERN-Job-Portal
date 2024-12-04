import { Avatar } from "@radix-ui/react-avatar";
import Navbar from "./shared/Navbar";
import { AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge"; // Fixed Badge import
import { Contact, Mail, Pen } from "lucide-react";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";

const skills = ["HTML", "CSS", "JavaScript", "React.js"];

const Profile = () => {
  const isResume = true;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto mt-6">
        <div className="flex items-center gap-4">
          <Avatar className="w-20 h-20">
            <AvatarImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUlGcxUmqLQ08e_4msz7RwXoNtq6yR_f_PA&s"
              className="rounded-full"
            />
          </Avatar>
          <div>
            <h1 className="text-xl font-semibold text-gray-800">Full Name</h1>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
              similique.
            </p>
          </div>
          <Button className="ml-auto">
            <Pen className="w-5 h-5" />
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800">viveknamdev897@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800">9111727225</span>
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-lg font-semibold text-gray-800">Skills</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.length !== 0 ? (
              skills.map((item, index) => (
                <Badge key={index} className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                  {item}
                </Badge>
              ))
            ) : (
              <span className="text-gray-500">NA</span>
            )}
          </div>
        </div>

        <div className="mt-6">
          <Label className="text-gray-700">Resume</Label>
          {isResume ? (
            <a
              className="text-blue-600 underline ml-2"
              target="_blank"
              href="https://youtube.com"
            >
              Vivek Namdev
            </a>
          ) : (
            <span className="text-gray-500 ml-2">NA</span>
          )}
        </div>

        <div className="mt-8">
          <h1 className="text-lg font-semibold text-gray-800">Applied Jobs</h1>
          <AppliedJobTable />
        </div>
      </div>
    </div>
  );
};

export default Profile;
