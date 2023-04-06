import { useLazyQuery } from "@apollo/client";
import * as React from "react";
import { useEffect, useLayoutEffect } from "react";
import { Alert } from "react-bootstrap";
import {
  ProposalFilter,
  ProposalSort,
  SortOperationKind,
} from "../../../generated/globalTypes";
import { ReportContainer } from "../reportPage/ReportContainer";
import { IPageInfo } from "../Table/CustomPagination";
import { useReportState } from "../UseReportHook";
import { MapPageInfo, MapReportRecords } from "./mapping";
import { PROPOSALS_LIST_BY_SITE_ID_QUERY } from "./query";
import {
  GetReportListFilter,
  ISearchByReportListParams,
} from "../reportPage/ReportListFilter";
import { IProposalsListData, ProposalsListTable } from "./ProposalsListTable";
import {
  ProposalsListBySiteId,
  ProposalsListBySiteIdVariables,
} from "../../../generated/ProposalsListBySiteId";
import { IReportListProps } from "../reportPage/ReportListProps";
import { useIsPhoneContext } from "../../../contexts/IsPhoneContext";
import { ProposalsMobileTable } from "./ProposalsMobileListTable";
import { ReportMobileContainer } from "../reportPage/ReportMobileContainer";

export const ProposalsList: React.FC<IReportListProps> = (props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const phoneContext = useIsPhoneContext();

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
  ] = useReportState<IProposalsListData, IPageInfo, ProposalSort>({
    clientSiteId: SortOperationKind.ASC,
  });

  const getSProposalsFilters = () => {
    return props.filter as ProposalFilter;
  };

  let [
    getProposalsBySiteId,
    { loading, error, data, refetch },
  ] = useLazyQuery<ProposalsListBySiteId>(PROPOSALS_LIST_BY_SITE_ID_QUERY, {
    variables: {
      where: getSProposalsFilters(),
      order_by: sortOrder,
      first: recordsPerPage,
    },
  });

  useLayoutEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    getProposalsBySiteId();
  }, [getProposalsBySiteId]);

  const searchBySiteAndRouteName = (search: ISearchByReportListParams) => {
    let filter: ProposalFilter = {
      ...getSProposalsFilters(),
      ...(search.searchContent && {
        OR: [
          {
            siteName_contains: search.searchContent,
          },
          {
            routeName_contains: search.searchContent,
          },
        ],
      }),
    };

    let variables: ProposalsListBySiteIdVariables = {
      where: filter,
      order_by: sortOrder,
      first: recordsPerPage,
    };
    getProposalsBySiteId({ variables: variables });
  };

  const handleChangeRecordsPerPage = (value: string) =>
    updateRecordsPerPage(value, handleRefetch);

  const handleSortOrderChange = (
    field: string,
    newOrder: SortOperationKind | null
  ) => updateSortOrder(field, newOrder, handleRefetch);

  const handleRefetch = (variables?: Partial<Record<string, any>>) => {
    if (refetch) {
      setIsLoading(loading);
      refetch(variables);
    }
  };

  useEffect(() => {
    if (data?.proposalByClientQuery) {
      reduceReportRecords(data.proposalByClientQuery.nodes, MapReportRecords);
      reducePageInfo(data.proposalByClientQuery.pageInfo, MapPageInfo);
      setTotalCount(data.proposalByClientQuery.totalCount);
    }
  }, [data, loading, reduceReportRecords, reducePageInfo, setTotalCount]);

  const getCurrentDisplay = (phoneContext: boolean) => {
    if (!pageInfo || !reportRecords || reportRecords.length === 0)
      return <Alert variant="info">No records could be found.</Alert>;

    return phoneContext ? (
      <ProposalsMobileTable
        refetch={handleRefetch}
        pageInfo={pageInfo}
        records={reportRecords}
        pageSize={recordsPerPage}
        updatePageSize={handleChangeRecordsPerPage}
        totalCount={totalCount}
      />
    ) : (
      <ProposalsListTable
        refetch={handleRefetch}
        pageInfo={pageInfo}
        records={reportRecords}
        pageSize={recordsPerPage}
        updatePageSize={handleChangeRecordsPerPage}
        sort={handleSortOrderChange}
        sortOrder={sortOrder}
        totalCount={totalCount}
      />
    );
  };

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
                searchFor: "Route Name / Site Name:",
                displayOrder: 1,
                search: searchBySiteAndRouteName,
              }),
            ],
            table: getCurrentDisplay(phoneContext),
          }}
        </ReportContainer>
      )}
    </>
  );
};
