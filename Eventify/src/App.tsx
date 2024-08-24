import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Layout } from "./components/features/shared/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Patient } from "./pages/Patient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout component is now a wrapper for all other components */}
        <Route path="/" element={<Layout />}>
          {/* Dashboard component */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="patient" element={<Patient />} />

          {/* Home component nested within Layout */}
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
