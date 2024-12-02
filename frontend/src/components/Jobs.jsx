import FilterCard from "./FilterCard";
import Job from "./Job";
import Navbar from "./shared/Navbar";

const jobsArray = [1, 2, 3, 4, 5, 6];

const Jobs = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <Navbar />
      <div className="mt-6">
        <FilterCard />
      </div>
      {jobsArray.length <= 0 ? (
        <span className="block mt-6 text-center text-red-600 text-lg">
          Job not found
        </span>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobsArray.map((item, index) => (
            <Job key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;
