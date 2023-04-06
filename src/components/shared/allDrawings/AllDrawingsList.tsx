import * as React from "react";
import { useAccountContext } from "../../../contexts/AccountContext";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useLayoutEffect } from "react";
import { Alert } from "react-bootstrap";
import {
  DrawingFilter,
  DrawingSort,
  SortOperationKind,
} from "../../../generated/globalTypes";
import { ReportContainer } from "../reportPage/ReportContainer";
import { IPageInfo } from "../Table/CustomPagination";
import { useReportState } from "../UseReportHook";
import { MapPageInfo, MapReportRecords } from "./mapping";
import { DRAWINGS_BY_SITE_ID_QUERY } from "./query";
import {
  IAllDrawingsListData,
  AllDrawingsListTable,
} from "./AllDrawingsListTable";
import {
  drawingsBySiteIdQuery,
  drawingsBySiteIdQueryVariables,
} from "../../../generated/drawingsBySiteIdQuery";
import {
  GetReportListFilter,
  ISearchByReportListParams,
} from "../reportPage/ReportListFilter";
import { IReportListProps } from "../reportPage/ReportListProps";
import { AllDrawingsMobileListTable } from "./AllDrawingsMobileListTable";
import { ReportMobileContainer } from "../reportPage/ReportMobileContainer";
import { useIsPhoneContext } from "../../../contexts/IsPhoneContext";

export const AllDrawingsList: React.FC<IReportListProps> = (props) => {
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
  ] = useReportState<IAllDrawingsListData, IPageInfo, DrawingSort>({
    clientSiteId: SortOperationKind.ASC,
  });

  let [
    getAllDrawingsBySiteId,
    { loading, error, data, refetch },
  ] = useLazyQuery<drawingsBySiteIdQuery>(DRAWINGS_BY_SITE_ID_QUERY, {
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
    getAllDrawingsBySiteId();
  }, [getAllDrawingsBySiteId]);

  const searchByNumberOrSheetNo = (search: ISearchByReportListParams) => {
    let filter: DrawingFilter = {
      ...(props.filter as DrawingFilter),
      ...(search.searchContent && {
        OR: [
          {
            number_contains: search.searchContent,
          },
          {
            sheet_contains: search.searchContent,
          },
        ],
      }),
    };

    let variables: drawingsBySiteIdQueryVariables = {
      // userId: +userId,
      where: filter,
      order_by: sortOrder,
      first: recordsPerPage,
    };
    getAllDrawingsBySiteId({ variables: variables });
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
    if (data?.drawingsQuery) {
      reduceReportRecords(data.drawingsQuery.nodes, MapReportRecords);
      reducePageInfo(data.drawingsQuery.pageInfo, MapPageInfo);
      setTotalCount(data.drawingsQuery.totalCount);
    }
  }, [data, loading, reduceReportRecords, reducePageInfo, setTotalCount]);

  const getCurrentDisplay = (phoneContext: boolean) => {
    if (!pageInfo || !reportRecords || reportRecords.length === 0)
      return <Alert variant="info">No records could be found.</Alert>;

    return phoneContext ? (
      <AllDrawingsMobileListTable
        refetch={handleRefetch}
        pageInfo={pageInfo}
        records={reportRecords}
        pageSize={recordsPerPage}
        updatePageSize={handleChangeRecordsPerPage}
        totalCount={totalCount}
      />
    ) : (
      <AllDrawingsListTable
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
                searchFor: "Number / SheetNo:",
                displayOrder: 1,
                search: searchByNumberOrSheetNo,
              }),
            ],
            table: getCurrentDisplay(phoneContext),
          }}
        </ReportContainer>
      )}
    </>
  );
};
