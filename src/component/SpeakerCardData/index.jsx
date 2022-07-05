import { speakers } from "./speaker";

export const SpeakerCardData = () => {
  return (
    <button
      className="flex flex-col px-4 w-80 py-10 items-center text-center gap-2 border-4 rounded-md transition ease-in-out duration-300 bg-white hover:scale-110"
    >
      <img src={speakers.img} alt="s" className="w-40 h-40" />
      <p className="text-primary font-bold">{speakers.nationality}</p>
      <p className="font-bold text-lg">{speakers.name}</p>
      <p className="text-sm">{speakers.institute}</p>
    </button>
  );
};
