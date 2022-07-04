import { speakers } from "../SpeakerCard/speaker";
export const SpeakerDetail = () => {
  return (
    <div className="flex flex-col my-12 border-2 py-12 px-12 gap-12 rounded-md ">
      <img src={speakers.img_keynote} />
      <div className="flex flex-col">
        <header className="text-3xl font-bold">{speakers.name}</header>
        <p className="font-semibold">{speakers.title}</p>
        <p className="font-semibold">{speakers.institute}</p>
        <p className="text-justify pt-4 leading-relaxed">
          Imam Machdi completed his doctoral education at the University Of
          Tsukuba Computer Science Japan and now serves as Deputy for
          Methodology and Statistical Information at BPS. has experience in the
          development of SPBE in Indonesia as Assistant Deputy for Policy
          Formulation and Coordination of the Implementation of Electronic-Based
          Government Systems at the Ministry of State Apparatus Empowerment and
          Bureaucratic Reform.
        </p>
      </div>
    </div>
  );
};
