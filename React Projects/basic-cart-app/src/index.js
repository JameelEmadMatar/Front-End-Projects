import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import { store } from './ReduxToolKit/Store';
// Routing
const route = createBrowserRouter([
  {
    path :'/',
    element : <App/>,
    errorElement : <div>Error 404 page</div>,
    children : [
      {index : true , element : <Products/>},
      {
        path : "cart",
        element : <Cart/>
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={route}/>
  </Provider>
);