import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const Statistics = () => {
  return (
    <div className=" relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 rounded-md shadow-lg mb-6 w-full">
      <div className="relative p-4  z-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm font-medium text-white/80">Total Sales</p>
            <p className="text-2xl font-bold text-white">$45,231.89</p>
            <p className="text-xs text-white/60 flex items-center">
              <ArrowUpIcon className="h-4 w-4 mr-1 text-green-400" />
              20.1% from last month
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm font-medium text-white/80">
              Average Order Value
            </p>
            <p className="text-2xl font-bold text-white">$259.35</p>
            <p className="text-xs text-white/60 flex items-center">
              <ArrowUpIcon className="h-4 w-4 mr-1 text-green-400" />
              12.3% from last month
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm font-medium text-white/80">Total Orders</p>
            <p className="text-2xl font-bold text-white">1,789</p>
            <p className="text-xs text-white/60 flex items-center">
              <ArrowUpIcon className="h-4 w-4 mr-1 text-green-400" />
              8.2% from last month
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-sm font-medium text-white/80">Conversion Rate</p>
            <p className="text-2xl font-bold text-white">3.18%</p>
            <p className="text-xs text-white/60 flex items-center">
              <ArrowDownIcon className="h-4 w-4 mr-1 text-red-400" />
              1.5% from last month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
