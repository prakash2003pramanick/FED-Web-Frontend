import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense, useContext } from "react";

// Layout
import Layout from "./Pages/Layout";

// Pages
const Home = React.lazy(() => import("./Pages/Home"));
const Team = React.lazy(() => import("./Pages/Team"));
const Error = React.lazy(() => import("./Pages/Error"));
const Alumni = React.lazy(() => import("./Pages/Alumni"));
const Events = React.lazy(() => import("./Pages/Events"));
const Podcasts = React.lazy(() => import("./Pages/Podcasts"));
const Testimonial = React.lazy(() => import("./Pages/Testimonial"));
const Login = React.lazy(() => import("./Pages/Login"));

// Loading
import Loading from "./MicroInterAction/Loading";

// Components
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import NavMobile from "./Components/NavMobile";

// Analytics
import { Analytics } from "@vercel/analytics/react";

// state
import AuthContext from "./store/auth-context";

// axios
import axios from "axios";

// BaseURL
axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Nav />
          <NavMobile />
          <div className="page">
            <div className="pageExt">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Home />
                    </Suspense>
                  }
                />
                <Route
                  path="/Event"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Events />
                    </Suspense>
                  }
                />
                <Route
                  path="/Podcasts"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Podcasts />
                    </Suspense>
                  }
                />
                <Route
                  path="/Team"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Team />
                    </Suspense>
                  }
                />
                <Route
                  path="/Alumni"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Alumni />
                    </Suspense>
                  }
                />
                <Route
                  path="/Testimonial"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Testimonial />
                    </Suspense>
                  }
                />

                {!authCtx.isLoggedIn && (
                  <Route
                    path="/Login"
                    element={
                      <Suspense fallback={<Loading />}>
                        <Login />
                      </Suspense>
                    }
                  />
                )}

                {authCtx.isLoggedIn && (
                  <Route
                    path="/MyProfile"
                    element={
                      <Suspense fallback={<Loading />}>
                        <Login />
                      </Suspense>
                    }
                  />
                )}

                <Route
                  path="*"
                  element={
                    <Suspense fallback={<Loading />}>
                      <Error />
                    </Suspense>
                  }
                />
              </Routes>
            </div>
          </div>
          <Footer />
        </Layout>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;
