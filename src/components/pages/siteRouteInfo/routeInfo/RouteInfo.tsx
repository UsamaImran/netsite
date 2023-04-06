import { useQuery } from '@apollo/client';
import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import { RouteByIdAndSiteId, RouteByIdAndSiteId_routesQuery_nodes } from '../../../../generated/RouteByIdAndSiteId';
import { isNotNull } from '../../../../utilities/utilities';
import { AlertWrapped } from '../../../shared/Alerts/AlertWrapped';
import { SimpleCard } from '../../../shared/Cards/SimpleCard';
import { ROUTE_BY_ID_AND_SITE_ID_QUERY } from './query';

interface IRouteInfoProps {
    id: string
}

export const RouteInfo: React.FC<IRouteInfoProps> = (props) => {
    let { loading, error, data } = useQuery<RouteByIdAndSiteId>(ROUTE_BY_ID_AND_SITE_ID_QUERY, {
        variables: {
            where: { routeId: + props.id }
        }
    }
    );

    const getRouteInfo = React.useCallback(() => {
        if (data?.routesQuery?.nodes) {
            const routes = isNotNull<RouteByIdAndSiteId_routesQuery_nodes>(data.routesQuery.nodes);
            if (routes.length > 0) {
                const route = routes[0];
                return (
                    <>
                        <Row>
                            <Col sm="5">
                                <Row>
                                    <Col sm="5">Route Name:</Col>
                                    <Col sm="7"><b>{route.routeName}</b></Col>
                                </Row>
                            </Col>
                            <Col sm="5">
                                <Row>
                                    <Col sm="5">Manufacturer:</Col>
                                    <Col sm="7"><b>{route.Manufacture?.manufacturerName}</b></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="5">
                                <Row>
                                    <Col sm="5">Scope Of Work:</Col>
                                    <Col sm="7"><b>{route.scopeOfWork}</b></Col>
                                </Row>
                            </Col>
                            <Col sm="5">
                                <Row>
                                    <Col sm="5">Installed by OPS:</Col>
                                    <Col sm="7"><b>{route.servicedByOPS}</b></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="5">
                                <Row>
                                    <Col sm="5">System Type:</Col>
                                    <Col sm="7"><b>{route.SystemType?.systemTypeDesc}</b></Col>
                                </Row>
                            </Col>
                        </Row>
                    </>)
            } else {
                return <p>No Route exists with the given id!</p>
            }
        }
        return null;
    }, [data]);

    const showError = React.useCallback(() => {
        if (error) {
            return <AlertWrapped
                header={error.name}
                text={error.message}
                bgStyle="danger"
                textColor="white"
            />
        }
        return null;
    }, [error])

    return (
        <>
            <Col md="8">
                <SimpleCard loading={loading} header="Route Information">
                    {getRouteInfo()}
                    {showError()}
                </SimpleCard>
            </Col>
        </>
    );
}