import { Cards } from "./cards";
import { eventData } from "./eventData";
export const Event = () => {
  return (
    <div className="justify-center flex flex-col text-center pb-16">
      <p className="text-4xl py-5 text-primary font-bold">Events</p>
      <div className="flex gap-6 justify-center">
        {eventData.map((data, index) => (
          <Cards
            key={index}
            title={data.title}
            content={data.content}
            link={data.link}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
