import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { CenteredSpinner } from '../../shared/Spinners';
import { ResetPasswordForm } from './form/ResetPasswordForm';

interface IResetPasswordProps { }

export const ResetPassword: React.FC<IResetPasswordProps> = () => {
  const { token } = useParams<{ token: string }>();
  const history = useHistory();

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      // history.push('/unauthorized');
      setIsLoading(false);
    }, 500);
  }, [token, history]);

  const updatePassword = (password: string) => {
    console.log(password);
  };

  return (
    <>
      <CenteredSpinner loading={isLoading} size='md'>
        <Row className='h-100 m-0'>
          <Col xs={12} md={12} lg={12} className='h-100 p-0 m-0'>
            <Container
              fluid
              className='d-flex align-items-center justify-content-center h-100'
            >
              <ResetPasswordForm updatePassword={updatePassword} />
            </Container>
          </Col>
        </Row>
      </CenteredSpinner>
    </>
  );
};
