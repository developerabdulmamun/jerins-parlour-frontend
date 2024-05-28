import Bookings from "@/components/Dashboard/Bookings/Bookings";
import React from "react";

export const metadata = {
  title: "Bookings | Jerin's Parlour",
  description: "Beauty saloon for every women",
};

const BookingListPage = () => {
  return (
    <div>
      <Bookings />
    </div>
  );
};

export default BookingListPage;
