import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Routes } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route>
            <NotFound />
          </Route>  
        </Routes>
      </div>
    </>
  );
}

export default Layout;
