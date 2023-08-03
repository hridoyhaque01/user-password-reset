import { createBrowserRouter } from "react-router-dom";
import ForgetPasword from "./Authentication/ForgetPassword";

export const routes = createBrowserRouter([
  {
    path: "/:email",
    element: <ForgetPasword></ForgetPasword>,
  },
  // {
  //   path: "/register",
  //   element: <Register></Register>,

  {
    path: "*",
    element: (
      <h2 className="font-black py-6 text-3xl text-red-600 text-center">
        Page Not Found!
      </h2>
    ),
  },
]);
