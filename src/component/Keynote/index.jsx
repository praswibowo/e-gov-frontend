import { SpeakerCard } from "../SpeakerCard";

export const Keynote = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-4xl pb-6 text-primary">Keynote Speaker</p>
      <div className="flex flex-row">
        <SpeakerCard />
      </div>
    </div>
  );
};
