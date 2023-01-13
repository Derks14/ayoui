import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserContext } from "@/context/UserContext.js";
import { useState } from "react";

export const Core = ({ children }) => {
  const query_client = new QueryClient();
  const user_state = useState(null);
  return (
    <QueryClientProvider client={query_client}>
      <UserContext.Provider value={user_state}>{children}</UserContext.Provider>
    </QueryClientProvider>
  );
};
