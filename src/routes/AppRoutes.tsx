import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";
import UsersPage from "../pages/users/UsersPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AdminLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
