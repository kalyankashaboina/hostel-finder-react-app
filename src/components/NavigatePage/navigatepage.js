import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Hostels from "../post-Login/hostels";
import Facilities from "../post-Login/facilities";


import DefaultPage from "../post-Login/default";
import AboutPage from "../post-Login/aboutpage"

import ForgetPassword from "../Pre-login/forgetpassword";


import LogInOne from "../Pre-login/login1";
import RegisterOne from "../Pre-login/registerOne";

const HomePage = lazy(() => import("../post-Login/home"));


const NavigatePage = () => {
  return (
    
    <>
    {/* <BrowserRouter> */}
      <Routes>
<Route path="register" Component={RegisterOne}/>
<Route path="/" Component={LogInOne}/>
<Route path="/forgetpassword" Component={ForgetPassword}/> 




<Route
        path="/home"
        element={
          <Suspense fallback="loading.....">
            <HomePage />
          </Suspense>
        }
      />
        <Route path="*" Component={DefaultPage}/>

        <Route path="/about" Component={AboutPage}/>


        <Route path="/facilities/:id/:id" Component={Facilities} />
        <Route path="/hostels/:id" Component={Hostels} />
      </Routes>

      {/* </BrowserRouter> */}
    </>
  );
};
export default NavigatePage;
