import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { SimpleCard } from "../../shared/Cards/SimpleCard";
import { getRegionTabsMetadata } from "./regionTab/regionTabsMetadata";
import { useParams } from "react-router";
import { Tabs } from "../../shared/Tabs/Tabs";
import { useIsPhoneContext } from "../../../contexts/IsPhoneContext";
import { TabsMobile } from "../../shared/Tabs/TabsMobile";
import { RegionInfoMobile } from "./regionTab/RegionInfoMobile";
import { RegionInfo } from "./regionTab/RegionInfo";

interface IIndexProps {}

export const Index: React.FC<IIndexProps> = ({ children }) => {
  const { id } = useParams<{ id: string }>();
  const { route } = useParams<{ route: string }>();
 
  const phoneContext = useIsPhoneContext();

  return (
    <>
      {phoneContext ? (
        <>
          <RegionInfoMobile name={"Region name"} />
          <TabsMobile tabs={getRegionTabsMetadata(id)}></TabsMobile>
        </>
      ) : (
        <Row className="m-side-negative">
          <Col md={5} className="px-0">
            <RegionInfo name={"Region name"} />
          </Col>
          <SimpleCard loading={false} header="Region">
            <Row>
              <Tabs tabs={getRegionTabsMetadata(id)} route={route}></Tabs>
           </Row>
          </SimpleCard>
        </Row>
      )}
    </>
  );
};
