import React from "react";
import { Carousel } from "../component/Carousel";
import { About } from "../component/About";
import { Keynote } from "../component/Keynote";
import { ImportantDates } from "../component/ImportantDates";
import { Event } from "../component/Events";
function Dashboard() {
  return (
    <div>
      <Carousel />
      <div className="mx-12 my-24 ">
        <About />
        <Keynote />
      </div>
      <ImportantDates />
      <Event />
    </div>
  );
}

export default Dashboard;
