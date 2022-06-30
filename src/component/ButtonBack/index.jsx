import { useNavigate } from "react-router-dom";

export const ButtonBack = () => {
  let navigate = useNavigate();
  const changePage = (path) => navigate(path);
  return (
    <img
      src="./img/back-icon.svg"
      alt="back"
      onClick={() => changePage("/")}
      className="cursor-pointer transition ease-in-out duration-300 hover:scale-125 "
    />
  );
};
