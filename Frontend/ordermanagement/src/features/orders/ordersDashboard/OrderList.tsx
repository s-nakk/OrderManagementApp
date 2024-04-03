import React, {useMemo, useState} from "react";
import {Customer, Order} from "../../../graphql/generated/schema";
import {ICellRendererParams} from "ag-grid-community";
import {AgGridReact} from "ag-grid-react";

interface OrderListProps {

  orders: Order[]
}

export default function OrderList({orders}: OrderListProps) {
  const [columnDefs, setColumnDefs] = useState([
    {
      field: 'id',
      width: 50,
      suppressSizeToFit: true,
    },
    {
      field: 'customer', cellRenderer: (params: ICellRendererParams) => {
        const customer = params.value as Customer;
        return `${customer.firstName} ${customer.lastName}`;
      }},
    {field: 'orderDate'},
    {field: 'description'},
    {field: 'status'},
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true,
    resizable: true,
  }), []);
  return (
    <div className={"ag-theme-alpine"} style={{height: 500, width: '100%'}}>
      <AgGridReact
        rowData={orders}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}/>
    </div>
  )

}