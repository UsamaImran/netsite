import * as React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface IFilterByProps {
  searchFor: string;
  selectedSearch: string;
  setSelectedSearch: (value: string) => void;
}

export const FilterByComponent: React.FC<IFilterByProps> = (props) => {
  const handleSetSearchBy = (value: string) => {
    props.setSelectedSearch(value);
  };

  const clearSearch = () => {
    props.setSelectedSearch("");
  };

  return (
    <>
      <Form.Group as={Row}>
        <Col sm="12">
          <Row>
            <Col md={{ span: 8, offset: 1 }}>
              <Form.Label className="search-label" column>
                {props.searchFor}
              </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 1 }}>
              <Form.Control
                size="lg"
                as="input"
                type="text"
                value={props.selectedSearch}
                onChange={(event) =>
                  handleSetSearchBy(event.currentTarget.value)
                }
              />
              {props.selectedSearch.length > 0 ? (
                <span className="clearSearchBtn" onClick={clearSearch}>
                  <FontAwesomeIcon className="closeIcon" icon={faTimes} />
                </span>
              ) : null}
            </Col>
          </Row>
        </Col>
      </Form.Group>
    </>
  );
};
