import React from "react";
import { PoiCard } from "../component/poi-card";
import { PoiInformation } from "../component/poi-card/poi-information";

function Venue() {
  return (
    <>
      <img
        src="./img/banner-ies.svg"
        className="object-fill w-full"
        alt="banner"
      />
      <div className="flex flex-col mx-40 my-24">
        <div className="flex items-center">
          <img src="./img/logo-pens.svg" alt="logo-pens" />
          <div className="flex flex-col ml-8">
            <p className="font-bold text-3xl">
              POLITEKNIK ELEKTRONIKA NEGERI SURABAYA
            </p>
            <p>
              Institut Teknologi Sepuluh Nopember, Kampus, Jl. Raya ITS,
              Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60111
            </p>
            <div>
              <button className=" inline-flex px-4 py-4 my-4 bg-primary rounded-lg text-white font-bold">
                Watch virtual Tour
              </button>
            </div>
          </div>
        </div>
        <img src="./img/maps.svg" alt="maps" className="my-12" />
      </div>
      <div className="bg-primary w-screen h-96 absolute">
        <div className="flex flex-col justify-center items-center pb-16">
          <p className="text-2xl text-white font-bold py-16">
            POINTS OF INTEREST NEAR SURABAYA
          </p>
          <div className="relative w-full flex gap-6 snap-x overflow-x-auto pb-14">
            {PoiInformation.map((poi, index) => (
              <PoiCard title={poi.title} src={poi.img} caption={poi.caption} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Venue;
