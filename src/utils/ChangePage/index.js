import { useNavigate } from "react-router-dom";

export const ChangePage = (path) => {
  let navigate = useNavigate();
  return navigate(path);
};
