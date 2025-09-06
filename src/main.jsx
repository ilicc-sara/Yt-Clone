import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "./css/queries.css";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import MainLayout from "@/layouts/MainLayout.jsx";
import Video from "./pages/videoPage/Video.jsx";
import Channel from "./pages/Channel.jsx";
import Home from "./pages/home/Home.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/video/:videoId",
        element: <Video />,
      },
      {
        path: "/channel/:channelId",
        element: <Channel />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
