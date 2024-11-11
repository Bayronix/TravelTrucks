import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useCampersSelector = () => {
  return useSelector((state: RootState) => state.campers);
};
