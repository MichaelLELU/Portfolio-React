import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import HomePage from "./pages/homepage/HomePage";
import ContactPage from "./pages/contactpage/ContactPage";
import ProjectPage from "./pages/projectpage/ProjectPage";
import ProjectsPages from "./pages/projectspages/ProjectsPages";


const router = createBrowserRouter(
  [
  {
    element: <App />,
    children: [
  
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/projects",
    element: <ProjectsPages/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>,
  },
  {
    path: "/projects/:id", 
    element: <ProjectPage/>,
  }, 
]}])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);