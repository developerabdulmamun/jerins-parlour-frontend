import Book from "@/components/Dashboard/Book/Book";
import React from "react";

export const metadata = {
  title: "Book | Jerin's Parlour",
  description: "Beauty saloon for every women",
};

const BookPage = () => {
  return (
    <div>
      <Book />
    </div>
  );
};

export default BookPage;
