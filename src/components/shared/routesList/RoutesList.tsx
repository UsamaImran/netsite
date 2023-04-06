import { useLazyQuery } from '@apollo/client';
import * as React from 'react';
import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { RouteFilter, RouteSort, SortOperationKind } from '../../../generated/globalTypes';
import { RoutesListBySiteId, RoutesListBySiteIdVariables } from '../../../generated/RoutesListBySiteId';
import { ReportContainer } from '../reportPage/ReportContainer';
import { IPageInfo } from '../Table/CustomPagination';
import { useReportState } from '../UseReportHook';
import { MapPageInfo, MapReportRecords } from './mapping';
import { ROUTES_LIST_BY_SITE_ID_QUERY } from './query';
import { GetReportListFilter, ISearchByReportListParams } from '../reportPage/ReportListFilter';
import { IRoutesListData, RoutesListTable } from './RoutesListTable';
import { IReportListProps } from '../reportPage/ReportListProps';
import { useIsPhoneContext } from '../../../contexts/IsPhoneContext';
import { RoutesListMobile } from './RoutesListMobile';
import { ReportMobileContainer } from '../reportPage/ReportMobileContainer';

export const RoutesList: React.FC<IReportListProps> = (props) => {
    const isPhone = useIsPhoneContext();
    const [
        reportRecords,
        pageInfo,
        sortOrder,
        recordsPerPage,
        totalCount,
        reduceReportRecords,
        reducePageInfo,
        updateSortOrder,
        updateRecordsPerPage,
        setTotalCount] = useReportState<
            IRoutesListData,
            IPageInfo,
            RouteSort>({ clientSiteId: SortOperationKind.ASC });

    let [getRoutesBySiteId, { loading, error, data, refetch }] = useLazyQuery<RoutesListBySiteId>(ROUTES_LIST_BY_SITE_ID_QUERY, {
        variables: {
            where: props.filter,
            order_by: sortOrder,
            first: recordsPerPage,
        }
    }
    );

    useEffect(() => {
        getRoutesBySiteId();
    }, [getRoutesBySiteId])

    const searchByRouteName = (search: ISearchByReportListParams) => {
        let filter: RouteFilter = {
            ...props.filter,
            ...(search.searchContent && ({
                OR: [{
                    routeName_contains: search.searchContent
                }]
            }))
        };
        //validate
        let variables: RoutesListBySiteIdVariables = {
            where: filter,
            order_by: sortOrder,
            first: recordsPerPage
        };
        getRoutesBySiteId({ variables: variables });
    }

    const handleChangeRecordsPerPage = (value: string) =>
        updateRecordsPerPage(value, handleRefetch);

    const handleSortOrderChange = (field: string, newOrder: SortOperationKind | null) =>
        updateSortOrder(field, newOrder, handleRefetch);


    const handleRefetch = (variables?: Partial<Record<string, any>>) => {
        if (refetch) {
            refetch(variables);
        }
    }

    useEffect(() => {
        if (data?.getRoutes) {
            reduceReportRecords(data.getRoutes.nodes, MapReportRecords);
            reducePageInfo(data.getRoutes.pageInfo, MapPageInfo);
            setTotalCount(data.getRoutes.totalCount);
        }
    }, [data, loading, reduceReportRecords, reducePageInfo, setTotalCount])

    const getCurrentDisplay = () => {
        if (!pageInfo || !reportRecords || reportRecords.length === 0)
            return <Alert variant="info">No records could be found.</Alert>;

        return isPhone ? (
            <RoutesListMobile
                refetch={handleRefetch}
                pageInfo={pageInfo}
                records={reportRecords}
                pageSize={recordsPerPage}
                updatePageSize={handleChangeRecordsPerPage}
                totalCount={totalCount}
            />
        ) : (
            <RoutesListTable
                refetch={handleRefetch}
                pageInfo={pageInfo}
                records={reportRecords}
                pageSize={recordsPerPage}
                updatePageSize={handleChangeRecordsPerPage}
                sort={handleSortOrderChange}
                sortOrder={sortOrder}
                totalCount={totalCount} />
        );
    };

    return (
        <>
            {isPhone ? (
                <ReportMobileContainer isLoading={loading} error={error}>
                    {{
                        list: getCurrentDisplay(),
                    }}
                </ReportMobileContainer>
            ) : <ReportContainer
                isLoading={loading}
                error={error}>
                {{
                    filters: [
                        GetReportListFilter({ searchFor: 'Route Name:', displayOrder: 1, search: searchByRouteName }),
                    ],
                    table: getCurrentDisplay()
                }}
            </ReportContainer>}
        </>
    );
}