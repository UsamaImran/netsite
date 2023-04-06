import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import { AlertCard, IAlertCardProps } from './AlertCard';

interface IAlertWrappedProps extends IAlertCardProps {}

export const AlertWrapped:React.FC<IAlertWrappedProps> = (props) => {
    const {...AlertCardProps}: IAlertCardProps = props;
    return (
        <Row className="justify-content-md-center">
            <Col md={6}>
                <AlertCard {...AlertCardProps} />
            </Col>
      </Row>
    );
}