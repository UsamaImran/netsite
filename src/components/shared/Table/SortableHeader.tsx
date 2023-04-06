import * as React from 'react';
import classNames from 'classnames';
import { RouteSort, InvoiceSort, SortOperationKind } from '../../../generated/globalTypes';
interface ISortableHeaderProps { field?: string, currentSort: SortOperationKind | RouteSort | InvoiceSort | null, refresh: (field: string, sortOrder: SortOperationKind | null) => void }

export const SortableHeader: React.FC<ISortableHeaderProps> = (props) => {


  const getSortValue = (currentSort: SortOperationKind | InvoiceSort | null, field?: string): [string | null, SortOperationKind | null] => {
    if (currentSort !== null && field) {
      const current = currentSort as { [key: string]: SortOperationKind };
      let matchedField = Object.keys(currentSort).find(key => key === field);
      if (matchedField) {
        return [matchedField, current[(matchedField)]];
      }
    }
    return [null, null]
  }

  const [sortField, sortValue] = React.useMemo(() => getSortValue(props.currentSort, props.field), [props.currentSort, props.field]);

  const thClassNames = () => {
    let sortDir: string = "";
    if (sortField) {
      switch (sortValue) {
        case SortOperationKind.ASC:
          sortDir = "-sort-asc";
          break;
        case SortOperationKind.DESC:
          sortDir = "-sort-desc";
          break;
        default:
          sortDir = "";
      }
    }
    return classNames(props.field ? "th-sortable" : "", sortDir);
  }

  const handleSort = () => {
    let nextSort: SortOperationKind | null = null;
    switch (sortValue) {
      case SortOperationKind.ASC:
        nextSort = SortOperationKind.DESC;
        break;
      case SortOperationKind.DESC:
        nextSort = null;
        break;
      default:
        nextSort = SortOperationKind.ASC;
        break;
    }

    props.field && props.refresh(props.field, nextSort)
  }

  return (
    <th className={thClassNames()} onClick={() => { handleSort() }} >
      {
        props.children
      }
    </th>
  );
}
