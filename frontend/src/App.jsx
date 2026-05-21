import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Monitoring from "./pages/Monitoring";
import Infrastructure from "./pages/Infrastructure";
import Deployments from "./pages/Deployments";

function App() {

  return (

    <Routes>

      {/* <Route path="/" element={<Login />} /> */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/monitoring"
        element={<Monitoring />}
      />

      <Route
        path="/infrastructure"
        element={<Infrastructure />}
      />

      <Route
        path="/deployments"
        element={<Deployments />}
      />

    </Routes>

  );
}

export default App;