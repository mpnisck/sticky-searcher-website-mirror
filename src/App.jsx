import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import { UserIdProvider } from "./context/userIdContext";
import Initial from "./shared/Initial";
import Login from "./shared/Login";

const queryClient = new QueryClient();

function App() {
  return (
    <UserIdProvider>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/Initial"
            element={<Initial />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </QueryClientProvider>
    </UserIdProvider>
  );
}

export default App;
