import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { IReportFileInfo } from "../../types/baseReport";
import { ExportButton } from "../ExportButton";
import { FilterByComponent } from "./ReportFilterBy";
import { IFilter } from "./ReportFilterContainer";

export interface ISearchByReportListParams {
    searchContent: string
}

interface IReportListFilterProps {
    searchFor: string;
    search: (search: ISearchByReportListParams) => void;
    export?: (search: ISearchByReportListParams) => Promise<IReportFileInfo>
}

interface IReportListFilter {
    displayOrder: number;
    searchFor: string;
    search: (search: ISearchByReportListParams) => void;
    export?: (search: ISearchByReportListParams) => Promise<IReportFileInfo>
}


export const GetReportListFilter = (props: IReportListFilter): IFilter => {
    const { displayOrder, ...filterProps } = { ...props }
    let filter: IFilter = {
        displayOrder: displayOrder,
        name: "Filter By Search",
        eventKey: "ListSearch",
        component: <ReportListFilter {...filterProps} />
    };
    return filter;
}

const ReportListFilter: React.FC<IReportListFilterProps> = (props) => {

    const [searchContent, setSearchContent] = useState<string>("");

    const handleSearchContentChange = (value: string) => {
        if (value !== searchContent) {
            setSearchContent(value);
        }
    }

    const handleSearch = () => props.search(BuildClientParams());
    const handleExport = () => {
        return props.export!(BuildClientParams())
    };

    const BuildClientParams = () => {
        let params: ISearchByReportListParams = {
            searchContent: searchContent
        }
        return params;
    }

    return (
        <>
            <FilterByComponent searchFor={props.searchFor} selectedSearch={searchContent} setSelectedSearch={handleSearchContentChange} />
            <Form.Group as={Row}>
                <Col md={{span:6, offset:1}}>
                    <Button variant="primary" onClick={() => handleSearch()}>Search</Button>
                    {props.export ? <ExportButton disabled={false} export={handleExport} /> : null}
                </Col>
            </Form.Group>
        </>
    );
}
