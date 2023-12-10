import React from "react";
import { Sale } from "../assets/product_data.model.ts"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { LineChart } from '@mui/x-charts/LineChart';

const columns: GridColDef[] = [
    { headerName: 'Week Ending', field: 'weekEnding', flex: 1 },
    { headerName: "Retail Sales", field: "retailSales", flex: 1 },
    { headerName: "Wholesale Sales", field: "wholesaleSales", flex: 1 },
    { headerName: "Units Sold", field: "unitsSold", flex: 1 },
    { headerName: "Retailer Margin", field: "retailerMargin", flex: 1 },
]

interface Props {
    sales: Sale[]
}

function SalesData({sales}: Props) {

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
                            angle: 25,
                            textAnchor: 'start',
                            fontSize: 12,
                        },
                        // a little trick to help the graph look better, would not do in a real product
                        min: sales[0].weekEndingAsNumber as number
                    },
                ]}
                series={[{
                    dataKey: "retailSales",
                    label: "Retail"
                }, {
                    dataKey: "wholesaleSales",
                    label: "Wholesale"
                }]}
                dataset={sales}
                height={500}
                margin={{
                    left: 100
                }}
            />
          </div>
          <div className="Table-Container">
            <DataGrid 
                rows={sales}
                columns={columns}
                initialState={{
                    pagination: { paginationModel: { pageSize: 10 } },
                }}
                pageSizeOptions={[5, 10, 25]}
                getRowId={(row: Sale) => row.weekEnding}
            />
          </div>
        </div>
    )
}

export default SalesData;
