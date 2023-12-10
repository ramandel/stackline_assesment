import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import logo from './assets/stackline_logo.svg';
import mockData from './assets/stackline_frontend_assessment_data_2021.json'
import './App.css';
import { setData, dataIsRequested } from './redux/productDataReducer.ts'
import { RootState } from "./redux/store.ts";
import SalesData from "./components/SalesData.tsx";
import ProductInfo from "./components/ProductInfo.tsx";

function App() {
  const dispatch = useDispatch()
  // this was from an idea I had of doing a fake loader for a second but decided was too much
  // const _pending = useSelector((state: RootState) => state.product.pending)
  const data = useSelector((state: RootState) => state.product.data)

  useEffect(() => {
    //start of fake data request
    if (!data) { // did this because it was doing a bunch of extra rerenders
      dispatch(dataIsRequested())
      // need to add an additional field to the sales data so that the line graph will play nice
      const updated = mockData.map(product => {
        const sales = product.sales.map((sale) => {
          return {
            ...sale,
            weekEndingAsNumber: new Date(sale.weekEnding).getTime()
          }
        })
        return { 
          ...product,
          sales
        }
      })
      dispatch(setData(updated))
    }
  }, [data])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='App-body'>
        {data?.map(product => (
          <div className='Product-Container' key={product.id}>
            <ProductInfo product={product} />
            <SalesData sales={product.sales}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
