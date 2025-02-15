import { ThemeProvider } from "@/components/ui/theme-provider";
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
import LinkedInAuthHandler from "@/components/ui/prebuilts/Auth/LinkedInAuthHandler";
import InstagramAuthHandler from "@/components/ui/prebuilts/Auth/InstagramAuthHandler";
import { isLoggedIn } from "@/lib/server/auth/controller";
import { useEffect, useState } from "react";

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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
              <Route path="/dashboard/" element={<Dashboard />} />
              <Route path="/linkedin-auth" element={<LinkedInAuthHandler />} />
              <Route
                path="/instagram-auth"
                element={<InstagramAuthHandler />}
              />
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
            </Route>,
          ),
        )}
      />
    </ThemeProvider>
  );
}
