import MakeAdmin from "@/components/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "@/utils/AdminRoute";
import React from "react";

export const metadata = {
  title: "Make Admin | Jerin's Parlour",
  description: "Beauty saloon for every women",
};

const MakeAdminPage = () => {
  return (
    <div>
      <AdminRoute>
        <MakeAdmin />
      </AdminRoute>
    </div>
  );
};

export default MakeAdminPage;
