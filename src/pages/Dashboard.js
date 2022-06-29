import React from "react";
import Navbar from "../component/navbar";
import { Carousel } from "../component/Carousel";
import { About } from "../component/About";
function Dashboard() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
