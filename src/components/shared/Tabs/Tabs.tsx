import * as React from 'react';
import { Nav, Tab, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { ITabsState } from './TabsState';

interface ITabsProps {
  tabs: ITabsState[];
  route: string;
}

export const Tabs: React.FC<ITabsProps> = (props) => {
  const [tabs, setTabs] = React.useState<ITabsState[]>([...props.tabs]);
  const history = useHistory();

  const activateTab = React.useCallback(
    (key: string) => {
      const tabToActivateIndex = tabs.findIndex((tab) => tab.key === key);
      if (tabToActivateIndex !== -1 && !tabs[tabToActivateIndex].isActivated) {
        const newTabs = [...tabs];
        newTabs[tabToActivateIndex] = {
          ...newTabs[tabToActivateIndex],
          isActivated: true,
        };

        setTabs(newTabs);
      }
    },
    [tabs]
  );

  const changeTabRoute = React.useCallback(
    (key: string) => {
      const tabToActivateIndex = tabs.findIndex((tab) => tab.key === key);
      history.replace({
        pathname: tabs[tabToActivateIndex].route,
      });
    },
    [history, tabs]
  );

  React.useEffect(() => {
    let activeTabData = tabs.find((tab) => tab.route === props.route);

    if (activeTabData === undefined) {
      history.push(`${history.location.pathname}/${tabs[0].route}`);
    } else {
      activateTab(activeTabData.key);
    }
  }, [activateTab, props.route, tabs, history]);

  let index = tabs.findIndex((tab) => tab.route === props.route);
  if (index === -1) {
    index = 0;
  }

  return (
    <>
      <Col sm='12'>
        <Tab.Container id='netsite-tabs' defaultActiveKey={tabs[index].key}>
          <Row>
            <Col sm={12}>
              <Nav className='flex-row netsite-tabs'>
                {tabs.map((singleTab) => {
                  return (
                    <Nav.Item
                      key={singleTab.key}
                      onClick={() => changeTabRoute(singleTab.key)}
                    >
                      <Nav.Link eventKey={singleTab.key}>
                        {singleTab.name}
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </Col>
            <Col sm={12}>
              <Tab.Content>
                {tabs.map((singleTab) => {
                  return (
                    <Tab.Pane key={singleTab.key} eventKey={singleTab.key}>
                      <singleTab.component
                        filter={singleTab.filter}
                      ></singleTab.component>
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Col>
    </>
  );
};
