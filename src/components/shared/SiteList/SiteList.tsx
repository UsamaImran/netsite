import * as React from "react";
import { useLayoutEffect, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { ReportContainer } from "../../shared/reportPage/ReportContainer";
import { useReportState } from "../../shared/UseReportHook";
import { ISiteListReport, SiteListTable } from "./SiteListReport";
import { IPageInfo } from "../../shared/Table/CustomPagination";
import {
  ClientSiteUserPermissionFilter,
  SortOperationKind,
  ClientSort,
} from "../../../generated/globalTypes";
import { SITE_LIST_QUERY } from "./query";
import { Alert } from "react-bootstrap";
import {
  ISearchByReportListParams,
  GetReportListFilter,
} from "../../shared/reportPage/ReportListFilter";
import { MapReportRecords, MapPageInfo } from "./mapping";
import { useAccountContext } from "../../../contexts/AccountContext";
import { siteList, siteListVariables } from "../../../generated/siteList";
import { IReportListProps } from "../../shared/reportPage/ReportListProps";
import { useIsPhoneContext } from "../../../contexts/IsPhoneContext";
import { ReportMobileContainer } from "../../shared/reportPage/ReportMobileContainer";
import { SiteListMobileTable } from "./SiteListMobileReport";

export const SiteList: React.FC<IReportListProps> = (props) => {
  const { userId } = useAccountContext();
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
  ] = useReportState<ISiteListReport, IPageInfo, ClientSort>({
    clientId: SortOperationKind.ASC,
  });

  const [isLoading, setIsLoading] = React.useState(false);
  let [getSiteList, { loading, error, data, refetch }] = useLazyQuery<siteList>(
    SITE_LIST_QUERY,
    {
      variables: {
        userId: +userId,
        where: props.filter,
        order_by: sortOrder,
        first: recordsPerPage,
      },
    }
  );

  useLayoutEffect(() => {
    //This Helps to prevent flash of old content.
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    getSiteList();
  }, [getSiteList]);

  const handleRefetch = (variables?: Partial<Record<string, any>>) => {
    if (refetch) {
      setIsLoading(true);
      refetch(variables);
    }
  };

  const searchBySiteName = (search: ISearchByReportListParams) => {
    let filter: ClientSiteUserPermissionFilter = {
      ...(props.filter as ClientSiteUserPermissionFilter),
      siteName_contains: search.searchContent,
    };
    //validate
    let variables: siteListVariables = {
      userId: +userId,
      where: filter,
      order_by: sortOrder,
      first: recordsPerPage,
    };
    getSiteList({ variables });
  };

  const handleChangeRecordsPerPage = (value: string) =>
    updateRecordsPerPage(value, handleRefetch);

  const handleSortOrderChange = (
    field: string,
    newOrder: SortOperationKind | null
  ) => updateSortOrder(field, newOrder, handleRefetch);

  useEffect(() => {
    if (data?.clientSiteByUserPermissionQuery) {
      reduceReportRecords(
        data.clientSiteByUserPermissionQuery.nodes
          ? data.clientSiteByUserPermissionQuery.nodes
          : null,
        MapReportRecords
      );
      reducePageInfo(
        data.clientSiteByUserPermissionQuery.pageInfo,
        MapPageInfo
      );
      setTotalCount(data.clientSiteByUserPermissionQuery.totalCount);
    }
  }, [data, loading, reduceReportRecords, reducePageInfo, setTotalCount]);

  const getCurrentDisplay = (isPhone: boolean) => {
    if (!pageInfo || !reportRecords || reportRecords.length === 0)
      return <Alert variant="info">No records could be found.</Alert>;

    return isPhone ? (
      <SiteListMobileTable
        refetch={handleRefetch}
        pageInfo={pageInfo}
        records={reportRecords}
        pageSize={recordsPerPage}
        updatePageSize={handleChangeRecordsPerPage}
        totalCount={totalCount}
      />
    ) : (
      <SiteListTable
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
        <ReportContainer isLoading={isLoading} error={error}>
          {{
            filters: [
              GetReportListFilter({
                searchFor: "Site Name:",
                displayOrder: 1,
                search: searchBySiteName,
              }),
            ],
            table: getCurrentDisplay(phoneContext),
          }}
        </ReportContainer>
      )}
    </>
  );
};
