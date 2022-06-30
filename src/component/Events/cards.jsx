export const Cards = ({ title, content, link }) => {
  return (
    <div className="flex flex-col justify-center bg-green-200 h-1/3 rounded-lg py-4 px-4 ">
      <div className="flex gap-4 flex-col text-center">
        <p className="text-2xl text-primary font-bold">{title}</p>
        <p className="text-primary font-semibold w-64">{content}</p>
      </div>
      <a
        href={link}
        className="px-2 py-2 bg-primary rounded-full mt-4 text-white font-bold"
      >
        {" "}
        Read More
      </a>
    </div>
  );
};
