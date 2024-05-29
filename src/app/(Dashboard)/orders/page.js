import Orders from "@/components/Dashboard/Orders/Order";
import React from "react";

export const metadata = {
  title: "Orders | Jerin's Parlour",
  description: "Beauty saloon for every women",
};

const OrdersPage = () => {
  return (
    <div>
      <Orders />
    </div>
  );
};

export default OrdersPage;
