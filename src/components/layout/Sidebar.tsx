import {
  BarChart3Icon,
  BoxIcon,
  PackageIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "lucide-react";
import { Button } from "../ui/button";

const Sidebar = () => {
  return (
    <aside className="hidden w-64 bg-gray-800 p-6 shadow-md lg:block">
      <div className="flex items-center mb-8">
        <BoxIcon className="h-6 w-6 text-primary mr-2" />
        <span className="text-xl font-bold">SellMaster</span>
      </div>
      <nav className="space-y-2">
        <Button variant="ghost" className="w-full justify-start">
          <BarChart3Icon className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <PackageIcon className="mr-2 h-4 w-4" />
          Products
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <ShoppingCartIcon className="mr-2 h-4 w-4" />
          Orders
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <UsersIcon className="mr-2 h-4 w-4" />
          Customers
        </Button>
      </nav>
    </aside>
  );
};

export default Sidebar;
