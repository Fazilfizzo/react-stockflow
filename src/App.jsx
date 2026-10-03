// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Toaster } from "react-hot-toast";
// import ProductCard from './ProductCard'
import ProductListPage from './features/product/ProductListPage';
import ProtectedRoute from './routes/ProtectedRoute';
import Register from './features/auth/Register';
import AuthLayout from './shared/AuthLayout';
import DashboardLayout from './shared/DashboardLayout';
import Login from './features/auth/Login';
import CreateProduct from './features/product/CreateProduct';
import ProductDetailsPage from './features/product/ProductDetailsPage';
import CartPage from './features/cart/CartPage';
import HomePage from './shared/Homepage';
import PaymentSuccessPage from './features/payment/PaymentSuccessPage';
import PaymentCancelPage from './features/payment/PaymentCancelPage';
import DashboardPage from './features/dashboard/DashboardPage';
import OrderList from './features/order/OrderList';
import OrderDetailsPage from './features/order/OrderDetailsPage';
import StockMovementPage from './features/stock_movement/StockMovementPage';
import CreateSupplier from './features/supplier/CreateSupplier';
import CreateCategory from './features/category/CreateCategory';

function App() {

  return (
    <>
    <BrowserRouter>

<Toaster position="top-right"/>

<Routes>


{/* Public Authentication */}
<Route element={<AuthLayout />}>

    <Route 
        path="/login"
        element={<Login />}
    />

    <Route
        path="/register"
        element={<Register />}
    />

</Route>



{/* Public pages */}

<Route
    path="/"
    element={<HomePage />}
/>


<Route
    path="/payment-success"
    element={<PaymentSuccessPage />}
/>


<Route
    path="/payment-cancel"
    element={<PaymentCancelPage />}
/>



{/* Protected Application */}

<Route element={<ProtectedRoute />}>

    <Route element={<DashboardLayout />}>

        <Route
            path="/dashboard"
            element={<DashboardPage />}
        />


        <Route
            path="/products"
            element={<ProductListPage />}
        />


        <Route
            path="/products/create"
            element={<CreateProduct />}
        />


        <Route
            path="/products/:id"
            element={<ProductDetailsPage />}
        />


        <Route
            path="/cart"
            element={<CartPage />}
        />


        <Route
            path="/orders"
            element={<OrderList />}
        />


        <Route
            path="/orders/:id"
            element={<OrderDetailsPage />}
        />


        <Route
            path="/stock-movements"
            element={<StockMovementPage />}
        />

        <Route
            path="/suppliers-create"
            element={<CreateSupplier />}
        />

        <Route
            path="/categories-create"
            element={<CreateCategory />}
        />

    </Route>

</Route>


</Routes>

</BrowserRouter>
     </> 
  
  );
}

export default App
