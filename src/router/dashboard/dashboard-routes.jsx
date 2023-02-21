import { Home } from "@/views/dashboard/home/home";
import { Chats } from "@/views/dashboard/chats/chats.jsx";
import { Content } from "@/views/dashboard/content/content.jsx";
import { Contacts } from "@/views/dashboard/contacts/contacts.jsx";
import { Messages } from "@/views/dashboard/messages/messages.jsx";
import { Settings } from "@/views/dashboard/settings/settings.jsx";

export const DashboardRoutes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "content",
    element: <Content />,
  },
  {
    path: "contacts",
    element: <Contacts />,
  },
  {
    path: "messages",
    element: <Messages />,
  },
  {
    path: "chats",
    element: <Chats />,
  },
  {
    path: "settings",
    element: <Settings />,
  },
];
