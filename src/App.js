import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Register, Pagenotfound } from './Pages/index'
import Privatroutes from "./Helper/Privatroutes";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route element={<Privatroutes />}>
            <Route path="/:id" element={<Home />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Pagenotfound />} />
        </Routes>


        <Footer />
      </BrowserRouter>

    </>

  );
}

export default App;
