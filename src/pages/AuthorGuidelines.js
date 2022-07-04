import React from "react";
import Poster from "../component/Poster";
import { poster } from "../component/Poster/poster";
import { ButtonFile } from "../component/ButtonFile";
import { ButtonBack } from "../component/ButtonBack";
function AuthorGuidelines() {
  const { posterA4, posterBanner } = poster;
  return (
    <div className="flex flex-col items-center mx-24 my-24 min-h-screen">
      <div className="flex w-full">
        <div className="flex">
          <ButtonBack />
        </div>
        <div className="justify-center grow flex">
          <p className="text-5xl font-bold text-primary ">Author Guidelines</p>
        </div>
      </div>
      <div className="flex justify-between w-full py-16">
        <ButtonFile
          href="./assets/download/User Guide Poster Session-EGov Summit 2022.pdf"
          title={"Download User Guide Poster"}
        />
        <ButtonFile
          href={"./assets/download/Template Proceeding E-Gov Summit.docx"}
          title={"Download Template Proceeding"}
        />
        <ButtonFile
          href={"./assets/download/Layout Banner 60160.ppt"}
          title={"Download Layout Banner"}
        />
      </div>
      <div className="flex gap-20 ">
        <Poster data={posterA4} />
        <Poster data={posterBanner} />
      </div>
      <div className="flex flex-col justify-center border-2 rounded-lg mt-6">
        <p className="bg-primary w-full text-center py-7 font-bold text-white rounded-t-lg text-2xl">
          Submission Fee
        </p>
        <p className="px-6 py-6">
          For review of Poster Session you can send an email to{" "}
          <b>pras@pens.ac.id</b> with subject{" "}
          <b>“Review E-Gov Summit Poster Session”</b>
        </p>
      </div>
    </div>
  );
}

export default AuthorGuidelines;
