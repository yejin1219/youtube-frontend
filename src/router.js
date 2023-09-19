import { createBrowserRouter } from "react-router-dom";

import Watch from "./pages/Watch";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const router = createBrowserRouter([ 
      //createBrowserRouter 함수를 사용하여 라우터를 생성하고, 라우팅 구성을 정의
      {
        path: "/",
        element: <Layout/>,
        errorElement: <NotFound />,
        children: [ // 해당 경로 아래에 중첩된 하위 경로와 해당 경로에서 렌더링될 컴포넌트를 정의
            {
               index: true,//  루트 경로의 기본 페이지를 정의합니다. 
                           // 즉, 루트 경로(/)로 접근했을 때는 <Home/> 컴포넌트가 렌더링
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


// const Layout = () => {
//   return(
//     <>
//       <Header/>
//       <Outlet/>  
//         {/* <Outlet/> : 하위 요소들을 사용하기 위한 것  */}
//     </>
//     );
//  }
// Layout 컴포넌트를 헤더와 아울렛으로 명시 


 /*루트 경로 / 로 접근했을 때 <Layout/>컴포넌트가 렌더링 그 하위인 <Home/>가 같이 렌더링
(<Outlet/> 을 명시했기 때문에 하위 요소<Home/>이 같이 렌더링됨 )
루트 경로 /watch로 접근했을 땐<Layout/>컴포넌트가 렌더링 그 하위인<Watch/>가 같이 렌더링*/