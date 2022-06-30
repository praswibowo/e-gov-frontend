import React from "react";
import { SpeakerDetail } from "../component/SpeakerDetail";
import { useNavigate } from "react-router-dom";
function KeynoteSpeaker() {
  let navigate = useNavigate();
  const changePage = (path) => navigate(path);
  return (
    <div className="flex justify-center flex-col items-center pt-16 mx-auto w-8/12">
      <div className="flex w-full">
        <div className="flex">
          <img
            src="./img/back-icon.svg"
            alt="back"
            onClick={() => changePage("/")}
            className="cursor-pointer transition ease-in-out duration-300 hover:scale-125 "
          />
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
