import { ThemeProvider } from "@/components/ui/theme-provider";
import { Client } from "appwrite";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "@/app/auth/Login";
import Register from "@/app/auth/Register";
import Dashboard from "@/app/dashboard/Dashboard";
import { isLoggedIn } from "@/lib/server/auth/controller";
import { useEffect, useState } from "react";

export default function App() {
  const client = new Client();
  if (process.env.NODE_ENV === "development") {
    client
      .setEndpoint("http://localhost/v1")
      .setProject("673e5e130010788ad4c9");
  } else {
    client.setProject("671d9734ace647d7440b");
  }

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Func");
      setIsUserLoggedIn(await isLoggedIn());
    };

    fetchData();
  }, [isUserLoggedIn]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path="/">
              <Route
                path="/login"
                element={
                  isUserLoggedIn ? <Navigate to="/dashboard" /> : <Login />
                }
              />
              <Route path="/register" element={<Register />} />
              <Route
                path="/dashboard"
                element={
                  isUserLoggedIn ? <Dashboard /> : <Navigate to="/login" />
                }
              />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>,
          ),
        )}
      />
    </ThemeProvider>
  );
}
