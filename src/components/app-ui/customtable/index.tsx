import React from 'react';
import DataTable from 'react-data-table-component';

import { customStyles } from './styles';

interface Props {
  title?: string;
  columns: any;
  data: any;
  pointerOnHover?: boolean;
  highlightOnHover?: boolean;
  striped?: boolean;
  selectable?: boolean;
  onRowClicked?: (row: any, event: any) => void;
  dense?: boolean;
  progressPending?: any;
  onSelectedRowsChange?: any;
  noHeader?: boolean;
  conditionalRowStyles?: [];
  selectableRowsComponent?: any;
  CustomEmptyData?: React.ReactNode | '';
}

const CustomLoader = () => (
  <div style={{ padding: '24px' }}>
    <img src='/loading.gif' width={400} />
  </div>
);

const CustomTable: React.FC<Props> = ({
  title,
  columns,
  data,
  onRowClicked,
  pointerOnHover = true,
  highlightOnHover = true,
  striped = true,
  dense = false,
  progressPending,
  selectable = false,
  onSelectedRowsChange,
  noHeader = true,
  conditionalRowStyles = [],
  selectableRowsComponent,
  CustomEmptyData,
}) => {
  return (
    <DataTable
      title={title}
      columns={columns.filter(obj => obj.selector && obj.inputType)}
      data={data.map((obj, i) => ({ ...obj, sn: i + 1 }))} //TODO: only add sn if it's in the schema, to improve performance here
      pointerOnHover={pointerOnHover}
      highlightOnHover={highlightOnHover}
      striped={striped}
      customStyles={customStyles}
      onRowClicked={onRowClicked}
      fixedHeader={true}
      selectableRows={selectable}
      selectableRowsComponent={selectableRowsComponent}
      onSelectedRowsChange={onSelectedRowsChange}
      fixedHeaderScrollHeight='100%'
      responsive
      dense={dense}
      style={{
        width: '100%',
      }}
      progressComponent={<CustomLoader />}
      progressPending={progressPending}
      conditionalRowStyles={conditionalRowStyles}
      noHeader={noHeader}
    />
  );
};

export default CustomTable;
