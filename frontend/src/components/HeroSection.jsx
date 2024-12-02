import { Search } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="text-center my-10">
      <div className="flex flex-col items-center gap-5">
        {/* Tagline */}
        <span className="px-4 py-2 rounded-full bg-gray-100 text-[#F83002]">
          No.1 Job Hunt Website
        </span>

        {/* Main Heading */}
        <h1 className="text-5xl font-bold">
          Search, Apply & <br />
          Get Your <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600">
          Choose a job you love, and you will never have to work a day in your life.
        </p>

        {/* Search Bar */}
<div className="flex items-center w-full max-w-md shadow-lg border border-gray-300 rounded-full overflow-hidden">
  <input
    type="text"
    placeholder="Find your dream jobs"
    className="flex-1 px-4 py-2 text-gray-700 outline-none"
  />
  <Button className="bg-[#6A38C2] px-5 py-2 text-white">
    <Search className="h-5 w-5" />
  </Button>
</div>

      </div>
    </div>
  );
};

export default HeroSection;
