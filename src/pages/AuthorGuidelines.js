import React from "react";
import Poster from "../component/Poster";
function AuthorGuidelines() {
  return (
    <div className="flex justify-center flex-col items-center mx-32">
      <p className="text-4xl font-bold pt-16">Author Guideliness</p>
      <div className="flex justify-between w-full pt-16 pb-10">
        <div>User Guide Poster</div>
        <div>Template Proceeding</div>
        <div>Layout Banner</div>
      </div>
      <div className="flex gap-20">
        <Poster />
      </div>
    </div>
  );
}

export default AuthorGuidelines;
