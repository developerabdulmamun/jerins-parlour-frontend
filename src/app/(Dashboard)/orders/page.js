import Orders from "@/components/Dashboard/Orders/Order";
import AdminRoute from "@/utils/AdminRoute";
import React from "react";

export const metadata = {
  title: "Orders | Jerin's Parlour",
  description: "Beauty saloon for every women",
};

const OrdersPage = () => {
  return (
    <div>
      <AdminRoute>
        <Orders />
      </AdminRoute>
    </div>
  );
};

export default OrdersPage;
