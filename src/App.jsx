import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

// Layout
import Layout from "./Pages/Layout";

// Pages
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Error from "./Pages/Error";
import Alumni from "./Pages/Alumni";
import Events from "./Pages/Events";
import Podcasts from "./Pages/Podcasts";
import Seeall from "./Components/Home/Seeall";
import MyProfile from "./Components/Profile/MyProfile";

// Components
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import NavMobile from "./Components/NavMobile";

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
