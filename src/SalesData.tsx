import React from "react";
import { Sale } from "./assets/product_data.model.ts"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { LineChart } from '@mui/x-charts/LineChart';

const columns: GridColDef[] = [
    { headerName: 'Week Ending', field: 'weekEnding', flex: 1 },
    { headerName: "Retail Sales", field: "retailSales", flex: 1 },
    { headerName: "Wholesale Sales", field: "wholesaleSales", flex: 1 },
    { headerName: "Units Sold", field: "unitsSold", flex: 1 },
    { headerName: "Retailer Margin", field: "retailerMargin", flex: 1 },
]

function SalesData(props: {sales: Sale[]}) {
    // console.log(props.sales)
    // const xAxis = props.sales
    return (
        <div className='Right-Container'>
          <div className="Graph-Container">
            <LineChart
                xAxis={[
                    {
                        dataKey: 'weekEndingAsNumber',
                        
                        valueFormatter: (value) => {
                            const dateTimeFormat = new Intl.DateTimeFormat('en-US', {day: "numeric", month: "short", year: "numeric"});
                            return dateTimeFormat.format(new Date(value))
                        },
                        scaleType: "time",
                        tickLabelStyle: {
                            angle: 15,
                            textAnchor: 'start',
                            fontSize: 12,
                        },
                        min: props.sales[0].weekEndingAsNumber
                    },
                ]}
                series={[{
                    dataKey: "retailSales",
                    label: "Retail"
                }, {
                    dataKey: "wholesaleSales",
                    label: "Wholesale"
                }]}
                dataset={props.sales}
                height={500}
                margin={{
                    left: 100
                }}
            />
          </div>
          <div className="Table-Container">
            <DataGrid 
                rows={props.sales}
                columns={columns}
                initialState={{
                    pagination: { paginationModel: { pageSize: 10 } },
                }}
                pageSizeOptions={[5, 10, 25]}
                getRowId={(row: Sale) => row.weekEnding + row.unitsSold}
            />
          </div>
        </div>
    )
}

export default SalesData;
