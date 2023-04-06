import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { SiteInfo } from './siteInfo/SiteInfo';
import { Tabs } from '../../shared/Tabs/Tabs';
import { getSiteTabsMetadata } from './siteTabs/siteTabsMetadata';
import { useIsPhoneContext } from '../../../contexts/IsPhoneContext';
import { SiteInfoMobile } from './siteInfo/SiteInfoMobile';
import { TabsMobile } from '../../shared/Tabs/TabsMobile';

interface IIndexProps { }

export const Index: React.FC<IIndexProps> = () => {
  const { id } = useParams<{ id: string }>();
  const { route } = useParams<{ route: string }>();
 
  const phoneContext = useIsPhoneContext();

  return (
    <>
      {phoneContext ?
        <>
          <SiteInfoMobile id={id}></SiteInfoMobile>
          <TabsMobile tabs={getSiteTabsMetadata(id)}></TabsMobile>
        </> :
        <Row>
         <Col style={{
            padding: '0px !important'
          }}>
            <Row>
              <SiteInfo id={id}>
                <Row style={{
                  paddingTop: '25px'
                }}>
                  <Tabs tabs={getSiteTabsMetadata(id)} route={route} ></Tabs>
                </Row>
              </SiteInfo>
            </Row>
          </Col>
        </Row>}
    </>
  );
}
