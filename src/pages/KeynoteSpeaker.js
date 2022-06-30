import React from "react";
import { ButtonBack } from "../component/ButtonBack";
import { SpeakerDetail } from "../component/SpeakerDetail";
function KeynoteSpeaker() {
  return (
    <div className="flex justify-center flex-col items-center pt-16 mx-auto w-8/12">
      <div className="flex w-full">
        <div className="flex">
          <ButtonBack />
        </div>
        <div className="justify-center grow flex">
          <p className="text-5xl font-bold text-primary ">Keynote Speaker</p>
        </div>
      </div>
      <SpeakerDetail />
    </div>
  );
}

export default KeynoteSpeaker;
