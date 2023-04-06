import { useLazyQuery } from "@apollo/client";
import * as React from "react";
import { useEffect, useLayoutEffect } from "react";
import { Alert } from "react-bootstrap";
import {
  InvoiceFilter,
  InvoiceSort,
  SortOperationKind,
} from "../../../generated/globalTypes";
import {
  InvoicesListBySiteId,
  InvoicesListBySiteIdVariables,
} from "../../../generated/InvoicesListBySiteId";
import { ReportContainer } from "../reportPage/ReportContainer";
import { IPageInfo } from "../Table/CustomPagination";
import { useReportState } from "../UseReportHook";
import { MapPageInfo, MapReportRecords } from "./mapping";
import { INVOICES_LIST_BY_SITE_ID_QUERY } from "./query";
import { IInvoicesListData, InvoicesListTable } from "./InvoicesListTable";
import { useAccountContext } from "../../../contexts/AccountContext";
import {
  GetReportListFilter,
  ISearchByReportListParams,
} from "../reportPage/ReportListFilter";
import { IReportListProps } from "../reportPage/ReportListProps";
import { InvoicesMobileListTable } from "./InvoicesMobileListTable";
import { useIsPhoneContext } from "../../../contexts/IsPhoneContext";
import { ReportMobileContainer } from "../reportPage/ReportMobileContainer";

export const InvoicesList: React.FC<IReportListProps> = (props) => {
  const { userId } = useAccountContext();
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
  ] = useReportState<IInvoicesListData, IPageInfo, InvoiceSort>({
    clientSiteId: SortOperationKind.ASC,
  });

  let [
    getInvoicesBySiteId,
    { loading, error, data, refetch },
  ] = useLazyQuery<InvoicesListBySiteId>(INVOICES_LIST_BY_SITE_ID_QUERY, {
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
    getInvoicesBySiteId();
  }, [getInvoicesBySiteId]);

  const searchByInvoiceOrJobNumber = (search: ISearchByReportListParams) => {
    let filter: InvoiceFilter = {
      ...(props.filter as InvoiceFilter),
      ...(search.searchContent && {
        OR: [
          {
            jNumber_contains: search.searchContent,
          },
          {
            inv_contains: search.searchContent,
          },
        ],
      }),
    };
    //validate
    let variables: InvoicesListBySiteIdVariables = {
      userId: +userId,
      where: filter,
      order_by: sortOrder,
      first: recordsPerPage,
    };
    getInvoicesBySiteId({ variables });
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
    if (data?.invoicePermissionsQuery) {
      reduceReportRecords(data.invoicePermissionsQuery.nodes, MapReportRecords);
      reducePageInfo(data.invoicePermissionsQuery.pageInfo, MapPageInfo);
      setTotalCount(data.invoicePermissionsQuery.totalCount);
    }
  }, [data, loading, reduceReportRecords, reducePageInfo, setTotalCount]);

  const getCurrentDisplay = (phoneContext: boolean) => {
    if (!pageInfo || !reportRecords || reportRecords.length === 0)
      return <Alert variant="info">No records could be found.</Alert>;

    return phoneContext ? (
      <InvoicesMobileListTable
        refetch={handleRefetch}
        pageInfo={pageInfo}
        records={reportRecords}
        pageSize={recordsPerPage}
        updatePageSize={handleChangeRecordsPerPage}
        totalCount={totalCount}
      />
    ) : (
      <InvoicesListTable
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
                searchFor: "Invoice / Job Number:",
                displayOrder: 1,
                search: searchByInvoiceOrJobNumber,
              }),
            ],
            table: getCurrentDisplay(phoneContext),
          }}
        </ReportContainer>
      )}
    </>
  );
};
