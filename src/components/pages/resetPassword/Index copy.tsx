import * as React from 'react';
import { useLazyQuery } from "@apollo/client";
import { Col, Container, Row } from 'react-bootstrap';
import { Redirect, useParams } from 'react-router-dom';
import { CenteredSpinner } from '../../shared/Spinners';
import { ResetPasswordForm } from './form/ResetPasswordForm';
import { RoutesListBySiteId } from '../../../generated/RoutesListBySiteId';
import { ROUTES_LIST_BY_SITE_ID_QUERY } from '../../shared/routesList/query';

interface IResetPasswordProps { }

export const ResetPassword: React.FC<IResetPasswordProps> = () => {
  const { token } = useParams<{ token: string }>();

  let [getRoutesBySiteId, { loading, error }] = useLazyQuery<RoutesListBySiteId>(ROUTES_LIST_BY_SITE_ID_QUERY, {
    variables: {
      where: {
        clientSiteId: +token
      }
    }
  }
  );

  React.useEffect(() => {
    getRoutesBySiteId();
  }, [getRoutesBySiteId]);

  const updatePassword = (password: string) => {
    console.log(password);
  }

  console.log('error', error);

  return (
    <>
      {error ? <Redirect to="/unauthorized" /> :
        <CenteredSpinner loading={loading} size="md">
          <Row className="h-100 m-0">
            <Col xs={12} md={12} lg={12} className="h-100 p-0">
              <Container
                fluid
                className="d-flex align-items-center justify-content-center h-100"
              >
                <ResetPasswordForm updatePassword={updatePassword} />
              </Container>
            </Col>
          </Row>
        </CenteredSpinner>}
    </>
  );
}
