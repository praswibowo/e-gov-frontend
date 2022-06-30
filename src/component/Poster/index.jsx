import { poster } from "./poster";

const Poster = () => {
  const data = poster.posterA4;
  console.log(data);
  return (
    <div className="flex flex-col ">
      <div className="px-7 py-7 bg-primary text-white whitespace-nowrap font-bold text-lg">
        <p>{data.title}</p>
      </div>
      <div>
        {data.content.map((item, index) => (
          <ul>
            <li>
              {" "}
              {item.title}
              <ul className="list-disc">
                {item.list.map((list, index) => (
                  <li>{list}</li>
                ))}
              </ul>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Poster;
