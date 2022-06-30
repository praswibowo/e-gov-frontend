import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import KeynoteSpeaker from "./pages/KeynoteSpeaker";
import AuthorGuidelines from "./pages/AuthorGuidelines";
import RegistrationFee from "./pages/RegistrationFee";
import DataManagement from "./pages/DataManagement";
import InfraGovernment from "./pages/InfraGovernment";
import Venue from "./pages/Venue";
import Navbar from "./component/navbar";
import Submissions from "./pages/Submissions";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/keynote-speakers" element={<KeynoteSpeaker />} />
        <Route path="/author-guidelines" element={<AuthorGuidelines />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/registration-fee" element={<RegistrationFee />} />
        <Route path="/data-management" element={<DataManagement />} />
        <Route path="/infra-gov" element={<InfraGovernment />} />
        <Route path="/venue" element={<Venue />} />
      </Routes>
    </>
  );
}

export default App;
