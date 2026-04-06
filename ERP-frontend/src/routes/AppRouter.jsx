import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import Sidebar from "../components/Sidebar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import PurchaseOrderPage from "../pages/PurchaseOrderPage";
import ProductsPage from "../pages/ProductsPage";
import SupplierPage from "../pages/SupplierPage"; 

function ProtectedPage({ children }) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-8">{children}</main>
        <Toaster position="top-right" richColors />
      </div>
    </ProtectedRoute>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
        {/* Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedPage>
              <Dashboard />
            </ProtectedPage>
          }
        />
        <Route
          path="/purchase-orders"
          element={
            <ProtectedPage>
              <PurchaseOrderPage />
            </ProtectedPage>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedPage>
              <ProductsPage />
            </ProtectedPage>
          }
        />
        <Route
          path="/supplier"
          element={
            <ProtectedPage>
              <SupplierPage />
            </ProtectedPage>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}