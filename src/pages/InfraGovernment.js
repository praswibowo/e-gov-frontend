import React from "react";
import { ButtonBack } from "../component/ButtonBack";
import { SpeakerCardInfra } from "../component/SpeakerCardInfra";

function InfraGovernment() {
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
        Intra-Government Network Implementation
      </p>
      <p className="max-w-4xl pt-16 text-justify leading-relaxed">
        Intra-Government Network is an Electronic System network used within the
        Agency.
        <br />
        In Presidential Regulation (Perpres) Number 95 of 2018, contains a
        strategic plan related to adequate information and communication
        technology infrastructure. These infrastructures are data centers,
        government-based service liaison systems or sharing systems, and
        intra-government networks. Meanwhile, in accelerating the SPBE, there
        are programs that must be completed within three years in the
        infrastructure sector and one of them is the intra-government network.
      </p>
      <p className="py-4 font-bold text-lg bg-primary text-white px-16 rounded-full my-8">
        Keynote Speaker
      </p>
      <SpeakerCardInfra />
    </div>
  );
}

export default InfraGovernment;
