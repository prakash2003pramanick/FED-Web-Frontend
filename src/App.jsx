import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// layout
import Layout from "./Pages/Layout";

// Components
import Nav from "./Components/Nav";
import NavMobile from "./Components/NavMobile";
import Footer from "./Components/Footer";

// Pages
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Events from "./Pages/Events";
import Podcasts from "./Pages/Podcasts";
import Team from "./Pages/Team";
import Alumni from "./Pages/Alumni";
import Seeall from "./Components/Home/Seeall";
import MyProfile from "./Components/Profile/MyProfile";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Nav />
        <NavMobile />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Event" element={<Events />} />
          <Route path="/Alumni" element={<Alumni />} />
          <Route path="/Podcasts" element={<Podcasts />} />
          <Route path="/Testimonial" element={<Seeall />} />
          <Route path="*" element={<Error />} />
          <Route path="/MyProfile" element={<MyProfile/>}/>
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
