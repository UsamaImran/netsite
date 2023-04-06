import * as React from "react";
import { ReactNode } from "react";
import { Card, Alert } from "react-bootstrap";
import { ApolloError } from "@apollo/client";
import { CenteredSpinner } from "../Spinners";

export interface IReportContainerProps {
  children: {
    list: ReactNode;
  };
  reportName?: string;
  isLoading: boolean;
  error: ApolloError | undefined;
}

export const ReportMobileContainer: React.FC<IReportContainerProps> = (
  props
) => {
  return (
    <>
      <Card className="card-mobile pt-1">
        <CenteredSpinner loading={props.isLoading} size="xs">
          {props.error ? (
            <Alert variant="info">{props.error.message}</Alert>
          ) : (
            props.children.list
          )}
        </CenteredSpinner>
      </Card>
    </>
  );
};
