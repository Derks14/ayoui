import {
  UserGroupIcon,
  RectangleGroupIcon,
  DocumentDuplicateIcon,
  WrenchScrewdriverIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid/index.js";
import { IconNav } from "@/sections/sidebar/components/icon-nav.jsx";
export const IconSidebar = () => {
  const navigations = [
    {
      id: "23423",
      title: "Home",
      route: "/home",
      icon: <RectangleGroupIcon className="h-6 w-6" />,
    },
    {
      id: "6574",
      title: "Contents",
      route: "/content",
      icon: <DocumentDuplicateIcon className="h-6 w-6" />,
    },
    {
      id: "42345",
      title: "Contacts",
      route: "/contacts",
      icon: <UserGroupIcon className="h-6 w-6" />,
    },
    {
      id: "65443",
      title: "Chats",
      route: "/chats",
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
    },
    {
      id: "43243",
      title: "Settings",
      route: "/settings",
      icon: <WrenchScrewdriverIcon className="h-6 w-6" />,
    },
  ];

  return (
    <div>
      {navigations.map((value) => (
        <IconNav key={value.id} value={value} />
      ))}
    </div>
  );
};
