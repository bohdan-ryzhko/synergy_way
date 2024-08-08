import { FC } from "react";
import { Centered } from "../../interfaces";

interface NoDataProps extends Centered {}

export const NoData: FC<NoDataProps> = ({ centered = false }) => {
  return (
    <div
      className={
        centered ? "w-full h-full flex items-center justify-center" : ""
      }
    >
      <p>No Data</p>
    </div>
  );
};
