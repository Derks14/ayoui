import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid/index.js";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid/index.js";
import { RectangleGroupIcon } from "@heroicons/react/24/outline/index.js";

export const UserCorner = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-12 h-12 outline-0 rounded-full active:ring-4 active:ring-gray-300">
        <div style={{ unset: true }}>
          <Avatar className="w-12 h-12 rounded-full">
            <AvatarImage
              className="w-12 h-12 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
              alt="Derrick Keteku"
            />
            <AvatarFallback delayMs={600}>DK</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuPortal>
        <DropdownMenuContent
          sideOffset={5}
          className="min-w-[250px] mr-2 bg-antique border-[1px] rounded border-stone-900 p-2 shadow"
        >
          <DropdownMenuItem className="outline-0 hover:bg-stone-900 rounded hover:text-antique">
            <div>
              <div className="flex items-center gap-1 p-2">
                <Avatar className="w-14 h-14 rounded-full mr-2">
                  <AvatarImage
                    className="w-14 h-14 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                    alt="Derrick Keteku"
                  />
                  <AvatarFallback delayMs={600}>DK</AvatarFallback>
                </Avatar>
                <div>
                  <h6 className="text-xs font-bold">Qwabena Derrick</h6>
                  <p className="text-xs">meet4teen@gmail.com</p>
                </div>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="h-[1px] my-2 rounded-lg bg-stone-900" />
          <DropdownMenuItem className="outline-0 hover:bg-stone-900 rounded hover:text-antique">
            <div className="flex items-center gap-2 py-[1px] px-1">
              <RectangleGroupIcon className="h-4" />
              <div>
                <p className="">Dashboard</p>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="outline-0 hover:bg-stone-900 rounded hover:text-antique">
            <div className="flex items-center gap-2 py-[1px] px-1">
              <AdjustmentsHorizontalIcon className="h-4" />
              <div>
                <p className="">Setting</p>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="h-[1px] my-2 rounded-lg bg-stone-900" />
          <DropdownMenuItem className="outline-0 hover:bg-stone-900 rounded hover:text-antique">
            <div className="flex items-center gap-2 py-[1px] px-1">
              <ArrowRightOnRectangleIcon className="h-4" />
              <div>
                <p className="">Logout</p>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
};
