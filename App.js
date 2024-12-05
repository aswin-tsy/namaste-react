import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/componets/Header";
import Body from "./src/componets/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./src/componets/About";
import Error from "./src/componets/Error";
import Contact from "./src/componets/Contact";
import RestaruantMenu from "./src/componets/RestaruantMenu";
import Shimmer from "./src/componets/Shimmer";
import Footer from "./src/componets/Footer";
import DarkContext from "./DarkContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/componets/Cart";
// import Grocery from "./src/componets/Grocery";

const Grocery = lazy (()=>import("./src/componets/Grocery"));
const About = lazy( ()=> import('./src/componets/About'));
                  


const AppLayout = () => {

  const [isDark, setDark] = useState(false);
  return (
    <div>
    <Provider store={appStore}>
      <DarkContext.Provider value={{isDark:isDark, setDark}} >
      <Header />
      <div className="pt-[200px]">
        <Outlet/>
      </div>
      
      
      <Footer/>
      </DarkContext.Provider>
    </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children:[
      {
        path: '/',
        element: <Body/>
      },
      {
        path: '/about',
        element: <Suspense fallback={<Shimmer/>}><About/></Suspense>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/grocery',
        element:(<Suspense fallback={<Shimmer/>}>
              <Grocery/>
          </Suspense>) ,
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/restautant/:restId',
        element: <RestaruantMenu/>
      },
    ],
    errorElement: <Error/>
  },
 
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
