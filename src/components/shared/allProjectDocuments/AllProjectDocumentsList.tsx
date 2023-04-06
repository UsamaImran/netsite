import * as React from "react";
import { useAccountContext } from "../../../contexts/AccountContext";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useLayoutEffect } from "react";
import { Alert } from "react-bootstrap";
import {
  ProjectFilter,
  DrawingSort,
  SortOperationKind,
} from "../../../generated/globalTypes";
import { ReportContainer } from "../reportPage/ReportContainer";
import { IPageInfo } from "../Table/CustomPagination";
import { useReportState } from "../UseReportHook";
import { MapPageInfo, MapReportRecords } from "./mapping";
import { PROJECT_BY_CLIENT_QUERY } from "./query";
import {
  IAllProjectDocumentsListData,
  AllProjectDocumetsListTable,
} from "./AllProjectDocumentsListTable";
import {
  ProjectsByClientQuery,
  ProjectsByClientQueryVariables,
} from "../../../generated/ProjectsByClientQuery";
import {
  GetReportListFilter,
  ISearchByReportListParams,
} from "../reportPage/ReportListFilter";
import { IReportListProps } from "../reportPage/ReportListProps";
import { AllProjectDocumetsMobileListTable } from "./AllProjectDocumentsMobileListTable";
import { ReportMobileContainer } from "../reportPage/ReportMobileContainer";
import { useIsPhoneContext } from "../../../contexts/IsPhoneContext";

export const AllProjectDocuments: React.FC<IReportListProps> = (props) => {
  const [isLoading, setIsLoading] = React.useState(false);
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
  ] = useReportState<IAllProjectDocumentsListData, IPageInfo, DrawingSort>({
    clientSiteId: SortOperationKind.ASC,
  });

  let [
    getAllProjectDocuments,
    { loading, error, data, refetch },
  ] = useLazyQuery<ProjectsByClientQuery>(PROJECT_BY_CLIENT_QUERY, {
    variables: {
      userId: +userId,
      where: props.filter,
      order_by: sortOrder,
      first: recordsPerPage,
    },
  });

  useLayoutEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    getAllProjectDocuments();
  }, [getAllProjectDocuments]);

  const searchBySiteOrRouteOrJNumber = (search: ISearchByReportListParams) => {
    let filter: ProjectFilter = {
      ...(props.filter as ProjectFilter),
      ...(search.searchContent && {
        OR: [
          {
            siteName_contains: search.searchContent,
          },
          {
            routeName_contains: search.searchContent,
          },
          {
            jNumber_contains: search.searchContent,
          },
        ],
      }),
    };

    //validate
    let variables: ProjectsByClientQueryVariables = {
      // userId: +userId,
      where: filter,
      order_by: sortOrder,
      first: recordsPerPage,
    };
    getAllProjectDocuments({ variables });
  };

  const handleChangeRecordsPerPage = (value: string) =>
    updateRecordsPerPage(value, handleRefetch);

  const handleSortOrderChange = (
    field: string,
    newOrder: SortOperationKind | null
  ) => updateSortOrder(field, newOrder, handleRefetch);

  const handleRefetch = (variables?: Partial<Record<string, any>>) => {
    setIsLoading(loading);
    if (refetch) {
      refetch(variables);
    }
  };

  useEffect(() => {
    if (data?.projectsByClientQuery) {
      reduceReportRecords(data.projectsByClientQuery.nodes, MapReportRecords);
      reducePageInfo(data.projectsByClientQuery.pageInfo, MapPageInfo);
      setTotalCount(data.projectsByClientQuery.totalCount);
    }
  }, [data, loading, reduceReportRecords, reducePageInfo, setTotalCount]);

  const getCurrentDisplay = (phoneContext: boolean) => {
    if (!pageInfo || !reportRecords || reportRecords.length === 0)
      return <Alert variant="info">No records could be found.</Alert>;

    return phoneContext ? (
      <AllProjectDocumetsMobileListTable
        refetch={handleRefetch}
        pageInfo={pageInfo}
        records={reportRecords}
        pageSize={recordsPerPage}
        updatePageSize={handleChangeRecordsPerPage}
        totalCount={totalCount}
      />
    ) : (
      <AllProjectDocumetsListTable
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
                searchFor: "Site Name / Route Name / Job Number:",
                displayOrder: 1,
                search: searchBySiteOrRouteOrJNumber,
              }),
            ],
            table: getCurrentDisplay(phoneContext),
          }}
        </ReportContainer>
      )}
    </>
  );
};
