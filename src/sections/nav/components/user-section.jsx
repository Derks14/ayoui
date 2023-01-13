import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

export const UserCorner = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button style={{ all: "unset" }}>
            <Avatar className="w-12 h-12 rounded-full">
              <AvatarImage
                className="w-12 h-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                alt="Derrick Keteku"
              />
              <AvatarFallback delayMs={600}>DK</AvatarFallback>
            </Avatar>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent
            className="min-w-[250px] bg-white p-2 shadow"
            sideOffset={5}
          >
            <DropdownMenuItem>
              <div>
                <div className="p-4">
                  <Avatar className="w-16 h-16 rounded-full">
                    <AvatarImage
                      className="w-16 h-16 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                      alt="Derrick Keteku"
                    />
                    <AvatarFallback delayMs={600}>DK</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="DropdownMenuSeparator" />
            <DropdownMenuItem>
              <div>one</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div>
  );
};
