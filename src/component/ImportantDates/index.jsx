import { Cards } from "./cards";
import { ImportantDatesData } from "./ImportantDates";

export const ImportantDates = () => {
  return (
    <>
      <div className="bg-primary absolute w-screen h-1/4 justify-center -z-10"></div>
      <div className="justify-center flex flex-col text-center pb-16 z-10">
        <p className="text-4xl py-5 text-white font-bold">Important Dates</p>
        <div className="flex gap-24 justify-center">
          {ImportantDatesData.map((data, index) => (
            <Cards key={index} header={data.title} content={data.content} />
          ))}
        </div>
      </div>
    </>
  );
};
