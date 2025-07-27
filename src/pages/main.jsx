import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Home from "./Home.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import MainLayout from "@/layouts/MainLayout.jsx";
import Video from "./Video.jsx";
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
    ],
  },
  // {
  //   path: "/video/:videoId",
  //   element: <Video />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
