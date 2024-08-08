import { FC, useState } from "react";
import { Mosaic, MosaicNode } from "react-mosaic-component";

import "react-mosaic-component/react-mosaic-component.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { MosaicCompanyWindow } from "./parts/MosaicCompanyWindow";
import { SelectCompanyId } from "../../interfaces";

export const MosaicCompany: FC = () => {
  const [mosaicValue, setMosaicValue] = useState<MosaicNode<SelectCompanyId>>({
    direction: "row",
    first: "a",
    second: {
      direction: "column",
      first: "b",
      second: "c",
    },
  });

  const handleChangeMosaic = (
    mosaicNode: MosaicNode<SelectCompanyId> | null
  ) => {
    if (!mosaicNode) return;

    setMosaicValue(mosaicNode);
  };

  return (
    <div id="mosaic-wrapper">
      <Mosaic
        renderTile={(id, path) => <MosaicCompanyWindow id={id} path={path} />}
        initialValue={mosaicValue}
        onChange={handleChangeMosaic}
      />
    </div>
  );
};
