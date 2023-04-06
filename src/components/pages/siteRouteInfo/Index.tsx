import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useIsPhoneContext } from '../../../contexts/IsPhoneContext';
import { SimpleCard } from '../../shared/Cards/SimpleCard';
import { ServiceHistoriesList } from '../../shared/serviceHistoriesList/ServiceHistoriesList';
import { SiteInfo } from '../site/siteInfo/SiteInfo';
import { SiteInfoMobile } from '../site/siteInfo/SiteInfoMobile';
import { RouteInfo } from './routeInfo/RouteInfo';
import { RouteInfoMobile } from './routeInfo/RouteInfoMobile';

interface IIndexProps { }

export const Index: React.FC<IIndexProps> = () => {
  const { id, routeId } = useParams<{ id: string, routeId: string }>();
  const phoneContext = useIsPhoneContext();

  return (
    <>
      {
        phoneContext ? (
          <>
            <RouteInfoMobile id={routeId}></RouteInfoMobile>
            <SiteInfoMobile id={id}></SiteInfoMobile>
            <SimpleCard loading={false} header="Service History">
              <ServiceHistoriesList filter={{
                routeId: +routeId
              }}></ServiceHistoriesList>
            </SimpleCard>
          </>)
          :
          <Row>
            <Col md="12">
              <Row>
                <RouteInfo id={routeId}></RouteInfo>
                <SiteInfo id={id}></SiteInfo>
              </Row>
              <Row>
                <Col md="12">
                  <SimpleCard loading={false} header="Service History">
                    <ServiceHistoriesList filter={{
                      routeId: +routeId
                    }}></ServiceHistoriesList>
                  </SimpleCard>
                </Col>
              </Row>
            </Col>
          </Row>}
    </>
  );
}
