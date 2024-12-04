import { Ghost } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = true;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Frontend Developer</h1>
        <div className="flex justify-center gap-2 mb-4">
          <Badge className="px-3 py-1 rounded-lg text-blue-700 font-bold" variant={Ghost}>
            12 Positions
          </Badge>
          <Badge className="px-3 py-1 rounded-lg text-red-700 font-bold" variant={Ghost}>
            Part Time
          </Badge>
          <Badge className="px-3 py-1 rounded-lg text-purple-700 font-bold" variant={Ghost}>
            24 LPA
          </Badge>
        </div>
        <Button
          disabled={isApplied}
          className={`w-full py-2 text-white font-bold rounded-lg ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-[#5f32ad]"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      <div className="mt-8">
        <h1 className="text-xl font-semibold mb-4">Job Description</h1>
        <div className="space-y-2">
          <p>
            <span className="font-semibold text-gray-700">Role:</span> Frontend Developer
          </p>
          <p>
            <span className="font-semibold text-gray-700">Location:</span> Hyderabad
          </p>
          <p>
            <span className="font-semibold text-gray-700">Description:</span> Lorem ipsum dolor
            sit, amet consectetur adipisicing elit.
          </p>
          <p>
            <span className="font-semibold text-gray-700">Experience:</span> 2 Years
          </p>
          <p>
            <span className="font-semibold text-gray-700">Salary:</span> 12 LPA
          </p>
          <p>
            <span className="font-semibold text-gray-700">Total Applicants:</span> 4
          </p>
          <p>
            <span className="font-semibold text-gray-700">Posted Date:</span> 04-12-24
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
