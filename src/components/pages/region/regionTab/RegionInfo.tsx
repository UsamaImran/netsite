import * as React from "react";
import { SimpleCard } from "../../../shared/Cards/SimpleCard";

interface IRegionInfoProps {
  name: string;
}

export const RegionInfo: React.FC<IRegionInfoProps> = ({ name }) => {
  return (
    <>
      <SimpleCard loading={false} header={name}></SimpleCard>
    </>
  );
};
