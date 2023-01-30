import {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { BellIcon } from "@heroicons/react/24/outline/index.js";

export const Notifications = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="">
        <BellIcon className="w-7" />
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={10}
          className="min-w-[250px] mr-2 bg-antique border-[1px] rounded border-stone-900 p-2 shadow"
        >
          <DropdownMenuLabel className="text-sm font-semibold text-center">
            Notifications
          </DropdownMenuLabel>
          <DropdownMenuGroup className="p-2 divide-y divide-stone-600">
            <DropdownMenuItem>
              <div className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
                <div className="flex-shrink-0">
                  <img
                    className="rounded-full w-11 h-11"
                    src="/docs/images/people/profile-picture-1.jpg"
                    alt="Jese"
                  />
                  <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                    <svg
                      className="w-3 h-3 text-white"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                      <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                    </svg>
                  </div>
                </div>
                <div className="w-full pl-3">
                  <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                    New message from{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Jese Leos
                    </span>
                    : Hey, whats up? All set for the presentation?
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-500">
                    a few moments ago
                  </div>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem></DropdownMenuItem>
            <DropdownMenuItem></DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};
