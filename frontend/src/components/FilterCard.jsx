import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    filterType: "Salary",
    array: ["0-40K", "42K-1Lakh", "1Lakh-5Lakh"]
  }
];

const FilterCard = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-sm">
      <h1 className="text-xl font-semibold text-gray-800">Filter Jobs</h1>
      <hr className="mt-3 mb-6 border-gray-300" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-lg font-medium text-gray-700 mb-2">{data.filterType}</h2>
            <div className="space-y-2">
              {data.array.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={item} id={item} className="text-indigo-600" />
                  <Label htmlFor={item} className="text-gray-600">{item}</Label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
