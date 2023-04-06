import { useQuery } from '@apollo/client';
import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ClientSitesById, ClientSitesById_getClientSites_nodes } from '../../../../generated/ClientSitesById';
import { isNotNull } from '../../../../utilities/utilities';
import { AlertWrapped } from '../../../shared/Alerts/AlertWrapped';
import { SimpleCard } from '../../../shared/Cards/SimpleCard';
import { SITE_BY_ID_QUERY } from './query';

interface ISiteInfoProps {
    id: string
}

export const SiteInfo: React.FC<ISiteInfoProps> = (props) => {
    let { loading, error, data } = useQuery<ClientSitesById>(SITE_BY_ID_QUERY, {
        variables: {
            where: { clientSiteId: + props.id }
        }
    }
    );

    const getSiteInfo = React.useCallback(() => {
        if (data?.getClientSites?.nodes) {
            const sites = isNotNull<ClientSitesById_getClientSites_nodes>(data.getClientSites.nodes);
            if (sites.length > 0) {
                const site = sites[0];
                return (
                    <>
                        <Row><Col>{site.siteName}</Col></Row>
                        <Row><Col>{site.addressLine1}</Col></Row>
                        <Row><Col>{site.city}, {site.state}, {site.zip}</Col></Row>
                    </>)
            } else {
                return <p>No site exists with the given id!</p>
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
            <Col md="12">
                <SimpleCard loading={loading} header="Site Information">
                    {getSiteInfo()}
                    {showError()}
                    {props.children}
                </SimpleCard>
            </Col>
        </>
    );
}