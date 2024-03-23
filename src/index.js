import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SubCategory from './Component/SubCategory';
import Product from './Component/Product';
import Search from './Component/Search';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FoodProvider } from './Context/Context';
import Category from './Component/Category';
const root = ReactDOM.createRoot(document.getElementById('root'));

 let routes = createBrowserRouter([
  {path:'/',element:<App />,children:[ 
  {path:'/',element:<Category />},
  {path:'/SubCategory/:sub' , element:<SubCategory />},
  {path:'/Product/:idMeals' ,element:<Product />},
  {path:'/Search/:idMeals' , element:<Search />}]},
  

 ])
root.render(
  <React.StrictMode>
  <FoodProvider>
   <RouterProvider router={routes}/>
   </FoodProvider>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
