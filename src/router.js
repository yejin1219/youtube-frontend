import { createBrowserRouter } from "react-router-dom";

import Watch from "./pages/Watch";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout/>,
        errorElement: <NotFound />,
        children: [ 
            {
               index: true,
                element: <Home/>
              },
            {
            path: "/watch",
            element: <Watch/>
          }
        ]
      },
]);
export default router;