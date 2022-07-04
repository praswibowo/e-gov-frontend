import React from "react";
import { ButtonBack } from "../component/ButtonBack";
import { SpeakerCard } from "../component/SpeakerCard";

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
      <SpeakerCard />
      <p className="text-5xl font-bold py-16">Registration Fee</p>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col justify-center border-2 rounded-lg">
          <p className="bg-primary w-full text-center py-7 font-bold text-white rounded-t-lg text-2xl">
            Registration Fee Policy
          </p>
          <ol className="list-decimal px-9 py-4 font-semibold leading-loose">
            <li>
              The submission fees applies for 1 (one) poster session and paper
              who accepted to participate.
            </li>
            <li>
              No refund will be made for registered participants who fail to
              turn up.
            </li>
          </ol>
        </div>
        <div className="flex flex-col justify-center border-2 rounded-lg pb-4 leading-loose">
          <p className="bg-primary w-full text-center py-7 font-bold text-white rounded-t-lg text-2xl">
            Registration Payment
          </p>
          <div className="px-9 pt-4 font-semibold">
            <p>
              The submission fee includes roll banner, proceeding book,
              workshop, conference kits, certificate, lunch, and coffee breaks.
              All payment can be done by a bank transfer to our account at
            </p>
            <ul className="list-disc pl-7">
              <li>Bank Name : Bank Mandiri</li>
              <li>
                Account Name : BPN 031 POLITEKNIK ELEKTRONIKA NEGERI SURABAYA
              </li>
              <li>Account Number : 1410005018346</li>
              <li>Swift code: BMRIIDJA</li>
              <li>
                Address of Bank : Mandiri KCP Surabaya Mulyosari Jl. Raya
                Mulyosari No. 360 D-E, Sukolilo, Surabaya, Jawa Timur 60113,
                Indonesia
              </li>
            </ul>
            <p>
              Deadline of Registration & Payment : July 27, 2022 <br /> After
              registration via bank transfer, please registered on Google Form
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfraGovernment;
