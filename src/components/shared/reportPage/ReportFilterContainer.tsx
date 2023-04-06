import * as React from 'react';
import { ReactNode } from 'react';
import { Alert } from 'react-bootstrap';
import { OrderBy } from '../../../utilities/utilities';
import { SimpleCard } from '../Cards/SimpleCard';

export interface IFilter {
    displayOrder: number;
    name: string;
    eventKey: string;
    component: ReactNode;
}

interface IReportFilterContainerProps {
    filters: IFilter[];
}

export const ReportFilterContainer: React.FC<IReportFilterContainerProps> = (props) => {

    const orderedFilters = OrderBy(props.filters, 'displayOrder');

    const GetFilters = () => {
        return (
            orderedFilters.map((item) => {
                return (
                    <SimpleCard style={{ marginBottom: 'none' }} key={item.eventKey} loading={false} >
                        {
                            item.component
                        }
                    </SimpleCard>
                )
            })
        )
    }

    const GetSingleFilter = () => {
        return (
            <>
                <Alert variant="info">Filters have not been setup for this report!</Alert>
            </>
        )
    }
    return (
        <>
            {
                props.filters.length < 1 ?
                    GetSingleFilter() :
                    GetFilters()
            }
        </>
    );
}
