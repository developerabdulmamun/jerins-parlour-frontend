import AddService from "@/components/Dashboard/AddService/AddService";
import AdminRoute from "@/utils/AdminRoute";
import React from "react";

export const metadata = {
  title: "Add Service | Jerin's Parlour",
  description: "Beauty saloon for every women",
};

const AddServicePage = () => {
  return (
    <div>
      <AdminRoute>
        <AddService />
      </AdminRoute>
    </div>
  );
};

export default AddServicePage;
