import { Outlet } from "react-router-dom";
import Header from "./Header";


const Layout = () => {
     return(
   <>
     <Header/>
     <Outlet/>  
       {/* <Outlet/> : 하위 요소들을 사용하기 위한 것  */}
   </>
   );
}
export default Layout;