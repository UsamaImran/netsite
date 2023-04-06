import * as React from "react";
import { Form } from "react-bootstrap";

export const PageSizeOptions = [10, 50, 100, 500, 1000];

export const PageSizeOptionsMobile = [10, 20, 50];

interface IRecordsPerPageProps {
  isMobile: boolean;
  currentSize?: number;
  handleChange: (value: string) => void;
}

export const RecordsPerPage: React.FC<IRecordsPerPageProps> = (props) => {
  return (
    <>
      <Form.Control
        className="pull-right"
        size="sm"
        as="select"
        value={props.currentSize || PageSizeOptions[0]}
        onChange={(event) => props.handleChange(event.currentTarget.value)}
      >
        <option></option>
        {(props.isMobile ? PageSizeOptionsMobile : PageSizeOptions).map(
          (pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          )
        )}
      </Form.Control>
    </>
  );
};
