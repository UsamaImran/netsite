import * as React from "react";
import { SimpleCard } from "../Cards/SimpleCard";
import { ITabsState } from "./TabsState";
import arrow from "../../../assets/images/next.svg";
import { NativeOverlay } from "../../../shared/NativeOverlay";

interface ITabsMobileProps {
  tabs: ITabsState[];
}

export const TabsMobile: React.FC<ITabsMobileProps> = (props) => {
  const [tabs] = React.useState<ITabsState[]>([...props.tabs]);

  const [activeTab, setActiveTab] = React.useState<ITabsState | null>(null);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const toggleModal = () => setShowModal(!showModal);

  const cardContainerStyle: React.CSSProperties = {
    borderBottom: "2px solid black",
    cursor: "pointer",
  };

  const cardBodyStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "20px",
    paddingLeft: "40px",
  };

  const arrowImageStyle: React.CSSProperties = { height: "19px" };

  const OverlayComponent = () => {
    return activeTab ? (
      <NativeOverlay
        show={showModal}
        setShow={toggleModal}
        header={activeTab.component.name}
      >
        <activeTab.component filter={activeTab.filter} />
      </NativeOverlay>
    ) : null;
  };

  return (
    <>
      <OverlayComponent />
      {tabs.map((singleTab) => {
        return (
          <div key={singleTab.key}>
            <SimpleCard
              isMobileView={true}
              style={cardContainerStyle}
              bodyStyle={cardBodyStyle}
              loading={false}
              onClick={() => {
                setActiveTab(singleTab);
                setShowModal(true);
              }}
            >
              <div>{singleTab.name}</div>
              <div>
                <img src={arrow} alt="Not found" style={arrowImageStyle}></img>
              </div>
            </SimpleCard>
          </div>
        );
      })}
    </>
  );
};
