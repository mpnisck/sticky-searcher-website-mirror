import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Empty from "./shared/empty";
import Login from "./shared/login";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/Empty"
          element={<Empty />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
