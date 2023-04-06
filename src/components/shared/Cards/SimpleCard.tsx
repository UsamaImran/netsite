import * as React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { CenteredSpinner } from '../Spinners';

interface ISimpleCardProps {
    loading: boolean,
    header?: string,
    buttons?: React.ReactNode,
    isMobileView?: boolean,
    style?: React.CSSProperties,
    bodyStyle?: React.CSSProperties,
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const SimpleCard: React.FC<ISimpleCardProps> = ({ loading, header, buttons, isMobileView, style, bodyStyle, onClick, children }) => {
    return (
        <Card style={style ? style : undefined} onClick={onClick}>
            {
                header &&
                <Card.Header>
                    <Row>
                        <Col xs={isMobileView ? 12 : 8}>
                            <h2 className="card-title">{header}</h2>
                        </Col>
                        {
                            buttons &&
                            <Col>
                                {buttons}
                            </Col>
                        }
                    </Row>

                </Card.Header>
            }
            <Card.Body style={bodyStyle ? bodyStyle : undefined}>
                <CenteredSpinner loading={loading} size={isMobileView ? "sm" : "md"}>
                    {
                        children
                    }
                </CenteredSpinner>
            </Card.Body>
        </Card>
    );
}
