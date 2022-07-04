export const Cards = ({ title, content, link, index }) => {
  return (
    <div>
      <div className="flex flex-col bg-green-200 rounded-lg py-4 px-4 h-full justify-between">
        <div className="flex gap-4 flex-col text-center">
          <p className="text-2xl text-primary font-bold">{title}</p>
          <p className="text-primary font-semibold w-64">{content}</p>
        </div>
        {index === 0 ? (
          <a
            href={"/registration-fee"}
            className="px-2 py-2 bg-yellow-500 rounded-full mt-4 text-white font-bold"
          >
            {" "}
            Registration
          </a>
        ) : null}
        <a
          href={link}
          className="px-2 py-2 bg-primary rounded-full mt-4 text-white font-bold"
        >
          {" "}
          Read More
        </a>
      </div>
    </div>
  );
};
