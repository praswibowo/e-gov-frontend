import React from "react";
import { ButtonBack } from "../component/ButtonBack";

function RegistrationFee() {
  return (
    <div className="mx-12 my-24 flex flex-col items-center">
      <div className="flex w-full pb-16">
        <div className="flex">
          <ButtonBack />
        </div>
        <div className="justify-center grow flex">
          <p className="text-5xl font-bold text-primary ">Registration</p>
        </div>
      </div>
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
            The registration fee is Rp. 150.000,- includes workshop, conference kits, certificate, lunch, and coffee breaks. All payment can be done by a bank transfer to our account at:
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
              submission via bank transfer, please scan
            </p>
            <ul>
              <ol>- The payment receipt</ol>
              <ol>- the names of the people who attended the workshop along with the chosen theme</ol>
            </ul>
            <p>
              send an email to pras@pens.ac.id for confirmation with subject
              “E-Gov Summit Workshop Registration”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationFee;
