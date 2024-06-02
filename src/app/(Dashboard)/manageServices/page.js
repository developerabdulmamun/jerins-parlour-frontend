import ManageService from "@/components/Dashboard/ManageService/ManageService";
import AdminRoute from "@/utils/AdminRoute";
import React from "react";

export const metadata = {
  title: "Manage Service | Jerin's Parlour",
  description: "Beauty saloon for every women",
};

const ManageServicePage = () => {
  return (
    <div>
      <AdminRoute>
        <ManageService />
      </AdminRoute>
    </div>
  );
};

export default ManageServicePage;
