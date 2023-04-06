import { useLazyQuery } from '@apollo/client'
import * as React from 'react'
import { useEffect, useLayoutEffect } from 'react'
import { Alert } from 'react-bootstrap'
import {
    ServiceDocumentFilter,
    ServiceDocumentSort,
    SortOperationKind,
} from '../../../generated/globalTypes'
import { ReportContainer } from '../reportPage/ReportContainer'
import { IPageInfo } from '../Table/CustomPagination'
import { useReportState } from '../UseReportHook'
import { MapPageInfo, MapReportRecords } from './mapping'
import { SERVICE_HISTORIES_LIST_BY_SITE_ID_QUERY } from './query'
import {
    ServiceHistoriesListBySiteId,
    ServiceHistoriesListBySiteIdVariables,
} from '../../../generated/ServiceHistoriesListBySiteId'
import {
    GetReportListFilter,
    ISearchByReportListParams,
} from '../reportPage/ReportListFilter'
import {
    IServiceHistoriesListData,
    ServiceHistoriesListTable,
} from './ServiceHistoriesListTable'
import { IReportListProps } from '../reportPage/ReportListProps'
import { ReportMobileContainer } from '../reportPage/ReportMobileContainer'
import { ServiceHistoriesMobileTable } from './ServiceHistoriesMobileList'
import { useIsPhoneContext } from '../../../contexts/IsPhoneContext'

export const ServiceHistoriesList: React.FC<IReportListProps> = (props) => {
    const [isLoading, setIsLoading] = React.useState(false)
    const phoneContext = useIsPhoneContext()

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
        setTotalCount,
    ] = useReportState<
        IServiceHistoriesListData,
        IPageInfo,
        ServiceDocumentSort
    >({ clientSiteId: SortOperationKind.ASC })

    const getServiceHistoryFilters = () => {
        return props.filter as ServiceDocumentFilter
    }

    let [getServiceHistoriesBySiteId, { loading, error, data, refetch }] =
        useLazyQuery<ServiceHistoriesListBySiteId>(
            SERVICE_HISTORIES_LIST_BY_SITE_ID_QUERY,
            {
                variables: {
                    where: getServiceHistoryFilters(),
                    order_by: sortOrder,
                    first: recordsPerPage,
                },
            }
        )

    useLayoutEffect(() => {
        setIsLoading(loading)
    }, [loading])

    useEffect(() => {
        getServiceHistoriesBySiteId()
    }, [getServiceHistoriesBySiteId])

    const searchByRouteName = (search: ISearchByReportListParams) => {
        let filter: ServiceDocumentFilter = {
            ...getServiceHistoryFilters(),
            ...(search.searchContent && {
                OR: [
                    {
                        jNumber_contains: search.searchContent,
                    },
                    {
                        siteName_contains: search.searchContent,
                    },
                    {
                        routeName_contains: search.searchContent,
                    },
                ],
            }),
        }

        let variables: ServiceHistoriesListBySiteIdVariables = {
            where: filter,
            order_by: sortOrder,
            first: recordsPerPage,
        }
        getServiceHistoriesBySiteId({ variables: variables })
    }

    const handleChangeRecordsPerPage = (value: string) =>
        updateRecordsPerPage(value, handleRefetch)

    const handleSortOrderChange = (
        field: string,
        newOrder: SortOperationKind | null
    ) => updateSortOrder(field, newOrder, handleRefetch)

    const handleRefetch = (variables?: Partial<Record<string, any>>) => {
        if (refetch) {
            setIsLoading(loading)
            refetch(variables)
        }
    }

    useEffect(() => {
        if (data?.serviceDocumentQuery) {
            reduceReportRecords(
                data.serviceDocumentQuery.nodes,
                MapReportRecords
            )
            reducePageInfo(data.serviceDocumentQuery.pageInfo, MapPageInfo)
            setTotalCount(data.serviceDocumentQuery.totalCount)
        }
    }, [data, loading, reduceReportRecords, reducePageInfo, setTotalCount])

    const getCurrentDisplay = (phoneContext: boolean) => {
        if (!pageInfo || !reportRecords || reportRecords.length === 0)
            return <Alert variant="info">No records could be found.</Alert>

        return phoneContext ? (
            <ServiceHistoriesMobileTable
                refetch={handleRefetch}
                pageInfo={pageInfo}
                records={reportRecords}
                pageSize={recordsPerPage}
                updatePageSize={handleChangeRecordsPerPage}
                totalCount={totalCount}
            />
        ) : (
            <ServiceHistoriesListTable
                refetch={handleRefetch}
                pageInfo={pageInfo}
                records={reportRecords}
                pageSize={recordsPerPage}
                updatePageSize={handleChangeRecordsPerPage}
                sort={handleSortOrderChange}
                sortOrder={sortOrder}
                totalCount={totalCount}
            />
        )
    }

    return (
        <>
            {phoneContext ? (
                <ReportMobileContainer isLoading={isLoading} error={error}>
                    {{
                        list: getCurrentDisplay(phoneContext),
                    }}
                </ReportMobileContainer>
            ) : (
                <ReportContainer isLoading={loading} error={error}>
                    {{
                        filters: [
                            GetReportListFilter({
                                searchFor:
                                    'Route Name / Site Name / Job Number:',
                                displayOrder: 1,
                                search: searchByRouteName,
                            }),
                        ],
                        table: getCurrentDisplay(phoneContext),
                    }}
                </ReportContainer>
            )}
        </>
    )
}
