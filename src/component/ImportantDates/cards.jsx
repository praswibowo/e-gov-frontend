export const Cards = ({ header, content }) => {
  return (
    <div className="rounded-lg flex flex-col py-4 px-4 bg-white w-1/3 border-2 shadow-md font-semibold">
      <p className="text-2xl text-primary font-bold pb-4">{header}</p>
      {content.map((content, index) => (
        <div className="flex justify-between">
          <p className="text-left">{content.title}</p>
          <p className="text-right whitespace-nowrap">{content.date}</p>
        </div>
      ))}
    </div>
  );
};
