import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./views/Dashboard";
import { Routes, Route } from "react-router-dom";
import KeynoteSpeaker from "./views/KeynoteSpeaker";
import AuthorGuidelines from "./views/AuthorGuidelines";
import RegistrationFee from "./views/RegistrationFee";
import DataManagement from "./views/DataManagement";
import InfraGovernment from "./views/InfraGovernment";
import Venue from "./views/Venue";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/keynote-speakers" element={<KeynoteSpeaker />} />
      <Route path="/author-guidelines" element={<AuthorGuidelines />} />
      <Route path="/registration-fee" element={<RegistrationFee />} />
      <Route path="/ies-kcic/data-management" element={<DataManagement />} />
      <Route path="/ies/kcic/infra-gov" element={<InfraGovernment />} />
      <Route path="/venue" element={<Venue />} />
    </Routes>
  );
}

export default App;
