import { useLazyQuery } from "@apollo/client";
import * as React from "react";
import { useEffect, useLayoutEffect } from "react";
import { Alert } from "react-bootstrap";
import {
  ComponentInventoryFilter,
  ComponentInventorySort,
  SortOperationKind,
} from "../../../generated/globalTypes";
import { ReportContainer } from "../reportPage/ReportContainer";
import { IPageInfo } from "../Table/CustomPagination";
import { useReportState } from "../UseReportHook";
import { MapPageInfo, MapReportRecords } from "./mapping";
import { INVENTORIES_LIST_BY_SITE_ID_QUERY } from "./query";
import {
  IInventoriesListData,
  InventoriesListTable,
} from "./InventoriesListTable";
import {
  InventoriesListBySiteId,
  InventoriesListBySiteIdVariables,
} from "../../../generated/InventoriesListBySiteId";
import { SiteInventoriesReport } from "./siteInventoriesReport";
import {
  GetReportListFilter,
  ISearchByReportListParams,
} from "../reportPage/ReportListFilter";
import { IReportListProps } from "../reportPage/ReportListProps";
import { InventoriesMobileTable } from "./InventoriesMobileList";
import { ReportMobileContainer } from "../reportPage/ReportMobileContainer";
import { useIsPhoneContext } from "../../../contexts/IsPhoneContext";

export const InventoriesList: React.FC<IReportListProps> = (props) => {
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
  ] = useReportState<IInventoriesListData, IPageInfo, ComponentInventorySort>({
    clientSiteId: SortOperationKind.ASC,
  });

  let [
    getInventoriesBySiteId,
    { loading, error, data, refetch },
  ] = useLazyQuery<InventoriesListBySiteId>(INVENTORIES_LIST_BY_SITE_ID_QUERY, {
    variables: {
      where: props.filter,
      order_by: sortOrder,
      first: recordsPerPage,
    },
  });

  useLayoutEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  useEffect(() => {
    getInventoriesBySiteId();
  }, [getInventoriesBySiteId]);

  const searchByBarcodeOrLocation = (search: ISearchByReportListParams) => {
    let filter: ComponentInventoryFilter = SiteInventoriesReport.GetClientSiteIdSearchFilter(
      props.filter as ComponentInventoryFilter,
      search
    );

    //validate
    let variables: InventoriesListBySiteIdVariables = {
      where: filter,
      order_by: sortOrder,
      first: recordsPerPage,
    };
    getInventoriesBySiteId({ variables: variables });
  };

  const exportByClientSite = async (search: ISearchByReportListParams) =>
    await SiteInventoriesReport.exportByClientSite(
      props.filter as ComponentInventoryFilter,
      search,
      sortOrder
    );

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
    if (data?.componentInventoriesReportQuery) {
      reduceReportRecords(
        data.componentInventoriesReportQuery.nodes,
        MapReportRecords
      );
      reducePageInfo(
        data.componentInventoriesReportQuery.pageInfo,
        MapPageInfo
      );
      setTotalCount(data.componentInventoriesReportQuery.totalCount);
    }
  }, [data, loading, reduceReportRecords, reducePageInfo, setTotalCount]);

  const getCurrentDisplay = (phoneContext: boolean) => {
    if (!pageInfo || !reportRecords || reportRecords.length === 0)
      return <Alert variant="info">No records could be found.</Alert>;

    return phoneContext ? (
      <InventoriesMobileTable
        refetch={handleRefetch}
        pageInfo={pageInfo}
        records={reportRecords}
        pageSize={recordsPerPage}
        updatePageSize={handleChangeRecordsPerPage}
        totalCount={totalCount}
      />
    ) : (
      <InventoriesListTable
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
                searchFor: "Barcode / Location:",
                displayOrder: 1,
                search: searchByBarcodeOrLocation,
                export: exportByClientSite,
              }),
            ],
            table: getCurrentDisplay(phoneContext),
          }}
        </ReportContainer>
      )}
    </>
  );
};
