import React from "react";
import { Carousel } from "../component/Carousel";
import { About } from "../component/About";
import { Keynote } from "../component/Keynote";
import { ImportantDates } from "../component/ImportantDates";
import { Event } from "../component/Events";
import { Sponsor } from "../component/Sponsor";
function Dashboard() {
  return (
    <><div>
      <Carousel />
      <div className="mx-12 my-24 ">
        <About />
        <Keynote />
      </div>
      <ImportantDates />
      <Event />
    </div><div className="mx-12 my-24 ">
        <Sponsor />
      </div></>
  );
}

export default Dashboard;
