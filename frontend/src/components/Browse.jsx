import Job from "./Job";
import Navbar from "./shared/Navbar";

const randomJobs = [1, 2, 3];

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-6">
        <h1 className="text-2xl font-bold">Search Results ({randomJobs.length})</h1>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          randomJobs.map((item, index) => {
            return (
              <Job key={index} jobId={item} />
            )
          })
        }
      </div>
    </div>
  );
}

export default Browse;
