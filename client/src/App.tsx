import React from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Onboarding from "./pages/Onboarding";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCookies } from "react-cookie";

const App: React.FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  //@ts-ignore
  const authToken = cookies.AuthToken;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {authToken && <Route path="/dashboard" element={<Dashboard />}></Route>}
        {authToken && (
          <Route path="/onboarding" element={<Onboarding />}></Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
