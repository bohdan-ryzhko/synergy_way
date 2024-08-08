import { useSelector } from "react-redux";
import { RootState } from "../redux";

export const useReduxStore = (): RootState => ({
  companies: useSelector((state: RootState) => state.companies),
});
