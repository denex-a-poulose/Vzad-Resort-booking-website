import Home from "./pages/Home";
import ResortPage from "./pages/ResortPage";
// import BillingPage from "./pages/BillingPage";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/resort", element: <ResortPage /> },
  //   { path: "/billing", element: <BillingPage /> },
];

export default routes;
