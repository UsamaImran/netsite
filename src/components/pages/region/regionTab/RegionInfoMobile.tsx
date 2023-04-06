import * as React from "react";
import { SimpleCard } from "../../../shared/Cards/SimpleCard";

interface IRegionInfoMobileProps {
  name: string;
}

export const RegionInfoMobile: React.FC<IRegionInfoMobileProps> = ({
  name,
}) => {
  return (
    <>
      <SimpleCard
        isMobileView={true}
        style={{
          borderBottom: "2px solid black",
        }}
        bodyStyle={{
          paddingLeft: "40px",
        }}
        loading={false}
        header={name}
      ></SimpleCard>
    </>
  );
};
