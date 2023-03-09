import { createBrowserRouter, RouterProvider, Outlet, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PostPage from "./pages/PostsPage";
import ErrorPage from "./pages/ErrorPage";
import UploadPost from "./pages/NewPostPage";
import PostInfo from "./pages/EditPost";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage />, errorElement: <ErrorPage /> },
  { path: "/posts", element: <PostPage />, errorElement: <ErrorPage /> },
  { path: "/uploadpost", element: <UploadPost />, errorElement: <ErrorPage /> },
  { path: "/edit-product/:id", element: <PostInfo />, errorElement: <ErrorPage /> },
  { path: "*", element: <ErrorPage />, errorElement: <ErrorPage /> },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <UploadPost />
    </RouterProvider>
  );
}

export default App;
