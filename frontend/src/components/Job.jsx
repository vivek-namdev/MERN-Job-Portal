import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate = useNavigate();
  const jobId = "asdfghjkl";
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Job Metadata */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-gray-500">2 days ago</p>
        <button className="p-2 bg-gray-100 rounded-full">
          <Bookmark className="text-gray-600" />
        </button>
      </div>

      {/* Company Information */}
      <div className="flex items-center mb-4 gap-3">
        <button className="p-0">
          <div className="w-12 h-12">
            <Avatar className="rounded-full">
              <AvatarImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUlGcxUmqLQ08e_4msz7RwXoNtq6yR_f_PA&s"
                alt="Company Logo"
                className="rounded-full"
              />
            </Avatar>
          </div>
        </button>
        <div>
          <h1 className="text-lg font-semibold">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Title and Description */}
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-800">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione placeat at pariatur quidem natus temporibus.
        </p>
      </div>

      {/* Job Tags */}
      <div className="flex items-center gap-2 mt-4">
        <span className="px-3 py-1 rounded text-sm bg-transparent border border-gray-300 text-blue-700 font-bold">
          12 Positions
        </span>
        <span className="px-3 py-1 rounded text-sm bg-transparent border border-gray-300 text-[#F83002] font-bold">
          Part Time
        </span>
        <span className="px-3 py-1 rounded text-sm bg-transparent border border-gray-300 text-[#7209b7] font-bold">
          24 LPA
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <button onClick={() => navigate(`/description/${jobId}`)} className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm rounded transition">
          Details
        </button>
        <button className="inline-flex items-center justify-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold text-sm rounded transition">
          Save For Later
        </button>
      </div>
    </div>
  );
};

export default Job;
