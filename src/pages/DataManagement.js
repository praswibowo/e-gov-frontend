import React from "react";
import { ButtonBack } from "../component/ButtonBack";
import { SpeakerCard } from "../component/SpeakerCard";
function DataManagement() {
  return (
    <div className="flex flex-col items-center mx-12 my-24 min-h-screen max-w-full">
      <div className="flex w-full pb-16">
        <div className="flex">
          <ButtonBack />
        </div>
        <div className="justify-center grow flex">
          <p className="text-5xl font-bold text-primary ">Workshop</p>
        </div>
      </div>
      <p className="py-4 font-bold text-lg bg-primary text-white px-16 rounded-full">
        Data Management
      </p>
      <p className="max-w-4xl pt-16 text-justify leading-relaxed">
        Data management is a data management process that includes all
        activities, so that it can be used as a source of information /
        analysis.
        <br />
        Data management scope:
        <ul>
          <li>
            • Data architecture management: the process of defining data
            requirements, guiding integration, controlling data assets and
            aligning data investments with business strategy.
          </li>
          <li>
            • Master data management is the process of managing master data
          </li>
          <li>
            • Reference data management is the process of managing reference
            data
          </li>
          <li>• Database management is the process of database management</li>
          <li>
            • Data quality management is a process that ensures that the data
            generated and managed in an electronic-based government system is
            quality data.
          </li>
          <li>
            • Internal policies for Data Management in Central/Local Government
            Agencies are policies that regulate the entire process of managing
            data architecture, master data, reference data, databases, data
            quality and data interoperability.
          </li>
        </ul>
      </p>
      <p className="py-4 font-bold text-lg bg-primary text-white px-16 rounded-full my-8">
        Keynote Speaker
      </p>
      <SpeakerCard />
    </div>
  );
}

export default DataManagement;
