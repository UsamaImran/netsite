import { useCallback, useState } from "react";
import { SortOperationKind } from "../../generated/globalTypes";
import { isNotNull } from "../../utilities/utilities";

/* 
    R = Report Interface
    I = Page Info Interface
    S = Sort Order Interface
    N = Record Node Type
*/
export const useReportState = <R, I, S extends {[key:string]:any}> (
    initialSortOrder?:S | undefined, //Sort Type
    initialReport?:R[] | undefined, // Report Type
    initialPageInfo?:I | undefined, // PageInfo
    initialRecordsPerPage? : number| undefined ) => {

    const [reportRecords, setReportRecords] = useState<R[] | undefined>(initialReport);
    const [pageInfo, setPageInfo] = useState<I | undefined>(initialPageInfo);
    const [sortOrder, setSortOrder] = useState<S | null>(initialSortOrder || null); //{clientName:SortOperationKind.ASC}
    const [recordsPerPage, setRecordsPerPage] = useState<number>(initialRecordsPerPage || 10); //PageSizeOptions[0]
    const [totalCount, setTotalCount] = useState<number>(0);


    const reduceReportRecords = useCallback(
        <N>(
            data:(N | null)[] | null, 
            map:(nodes:N[])=>R[]
        ) =>{
        let cleansedData = isNotNull(data);
        let state = map(cleansedData);
        setReportRecords(state) //There is a bug in eslint it is requiring the generics be added to the deps
    }, [setReportRecords]);// eslint-disable-line react-hooks/exhaustive-deps

    const reducePageInfo = useCallback(<P>(data:P, map:(pageInfo:P)=>I) => {
        let state = map(data);
        setPageInfo(state); //There is a bug in eslint it is requiring the generics be added to the deps
      },[setPageInfo]);// eslint-disable-line react-hooks/exhaustive-deps

    const updateSortOrder = useCallback((
        field:string, 
        newOrder:SortOperationKind|null, 
        handleRefetch:(variables?: Partial<Record<string, any>>)=>void) => {
            if(newOrder){
                setSortOrder({[field]: newOrder} as S | null)
                handleRefetch({order_by:{[field]: newOrder}});
            } else{
                setSortOrder(null);
                handleRefetch({order_by:null});
            } //There is a bug in eslint it is requiring the generics be added to the deps
        },[setSortOrder]);// eslint-disable-line react-hooks/exhaustive-deps
    
    const updateRecordsPerPage = useCallback((value:string, handleRefetch:(variables?: Partial<Record<string, any>>)=>void) => {
        let size = +value;
        setRecordsPerPage(size);
        handleRefetch({first:size});
    },[setRecordsPerPage])
        

    return [
        reportRecords, 
        pageInfo, 
        sortOrder, 
        recordsPerPage, 
        totalCount,  
        reduceReportRecords, 
        reducePageInfo, 
        updateSortOrder, 
        updateRecordsPerPage,
        setTotalCount
    ] as const;
      
}