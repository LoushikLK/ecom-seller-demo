import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Sidebar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 shadow-sm w-full ">
      <Button variant="ghost" className="lg:hidden">
        <MenuIcon className="h-6 w-6" />
      </Button>
      <div className="flex items-center space-x-4 justify-between w-full">
        <Input type="search" placeholder="Search..." className="w-64" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative h-8 w-8 rounded-full  bg-white"
            >
              <Avatar className="h-8 w-8 bg-white">
                <AvatarImage src="/favicon.ico" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 bg-gray-900 p-4 rounded-md gap-2 cursor-pointer"
            align="end"
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none mb-4 text-muted-foreground">
                  john@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Sidebar;
