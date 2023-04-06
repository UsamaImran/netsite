import * as React from 'react';
import { ReactNode } from 'react';
import { Row, Col, Card, Alert } from 'react-bootstrap';
import { ReportFilterContainer, IFilter } from './ReportFilterContainer';
import { ApolloError } from '@apollo/client';
import { SimpleCard } from '../Cards/SimpleCard';

export interface IReportContainerProps {
  children: {
    filters: IFilter[];
    table: ReactNode;
  }
  reportName?: string;
  isLoading: boolean;
  error: ApolloError | undefined;
}

export const ReportContainer: React.FC<IReportContainerProps> = (props) => {
  return (
    <>
      {props.reportName ? <Row>
        <Col>
          <Card>
            <Card.Header>
              <Row>
                <Col>
                  <h2>{props.reportName}</h2>
                </Col>
              </Row>
            </Card.Header>
          </Card>
        </Col>
      </Row> : null}
      <ReportFilterContainer filters={props.children.filters} />
      <SimpleCard loading={props.isLoading} header="">
        {
          props.error ?
            <Alert variant="info">{props.error.message}</Alert> :
            props.children.table
        }
      </SimpleCard>
    </>
  );
}
