const Poster = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="px-7 py-7 bg-primary text-white whitespace-nowrap font-bold text-lg">
        <p>{data.title}</p>
      </div>
      <div className="border-2 rounded-b-lg pb-6">
        <ul className="px-9">
          {data.content.map((item, index) => (
            <>
              <li className="text-lg font-semibold pt-4">{item.title}</li>
              <ul className="list-disc pl-8">
                {item.list.map((list, index) => (
                  <li>{list}</li>
                ))}
              </ul>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Poster;
