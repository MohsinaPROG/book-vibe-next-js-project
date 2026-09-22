"use client";

import { BooksContext } from "@/context/BookContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }) => {
  const data = useContext(BooksContext);

  const { readBooks, setReadBooks } = data || {};

  const handleAddToRead = () => {
    console.log("read book btn triggered", book);

    setReadBooks([...readBooks, book]);

    toast.success(`You have read "${book.bookName}"`);
  };

  return (
    <button
      className="btn btn-primary flex-1"
      onClick={() => handleAddToRead()}
    >
      Read
    </button>
  );
};

export default ReadButton;



