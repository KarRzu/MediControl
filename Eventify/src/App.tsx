import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Layout } from "./components/features/shared/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Patient } from "./pages/patient/Patient";
import { SignUpForm } from "./components/features/sign-up/SignUpForm";
import { SignInForm } from "./components/features/sign-in/SignInForm";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Trasy dostępne bez layoutu */}
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />

          {/* Trasa z layoutem */}
          <Route path="/" element={<Layout />}>
            {/* Te trasy będą renderowane wewnątrz layoutu */}
            <Route index element={<Dashboard />} />
            <Route path="patient" element={<Patient />} />
            {/* Strona domyślna dla layoutu */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
