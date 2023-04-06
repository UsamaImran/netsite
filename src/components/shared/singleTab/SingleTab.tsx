import * as React from 'react';
import { IReportListProps } from '../reportPage/ReportListProps';

export const SingleTab: React.FC<IReportListProps> = (props) => {
    return (
        <div>{props.filter.clientSiteId}</div>
    )
}