
"use client";

import React, { useContext , useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { BooksContext } from "@/context/BookContext";

const ListedBookCard = ({ book }) => {
  // Prevent error if book is undefined
  if (!book) {
    return null;
  }

  return (
    <div className="mb-5 flex w-full flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:flex-row">

      {/* Book Image */}
      <div className="relative h-64 w-full shrink-0 md:w-48">
        <Image
          src={book.image}
          alt={book.bookName || "Book"}
          fill
          className="rounded-xl object-contain"
        />
      </div>

      {/* Book Details */}
      <div className="flex flex-1 flex-col justify-center">

        <span className="mb-2 w-fit rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-600">
          {book.category}
        </span>

        <h2 className="text-2xl font-bold text-gray-800">
          {book.bookName}
        </h2>

        <p className="mt-1 text-gray-500">
          By {book.author}
        </p>

        <p className="mt-3">
          ⭐ {book.rating}
        </p>

        <p className="mt-3 text-gray-600">
          {book.review}
        </p>

        <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-gray-600 sm:grid-cols-2">
          <p>
            <span className="font-semibold">Publisher:</span>{" "}
            {book.publisher}
          </p>

          <p>
            <span className="font-semibold">Published:</span>{" "}
            {book.yearOfPublishing}
          </p>

          <p>
            <span className="font-semibold">Pages:</span>{" "}
            {book.totalPages}
          </p>

          <p>
            <span className="font-semibold">Book ID:</span>{" "}
            #{book.bookId}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        <Link
          href={`/books/${book.bookId}`}
          className="mt-5 w-fit rounded-lg bg-indigo-600 px-5 py-2 font-semibold text-white hover:bg-indigo-700"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};


const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  const {sortBy,setSortBy} = useState("rating");

 //console.log(sortBy,"sortBy");

 const sortBooks = (books) =>{
  const sortedBooks = [...books];

  if(sortBy === "rating"){
    sortedBooks.sort((a,b)=>b.rating - a.rating);
  }else if(sortBy === "pages"){
    sortedBooks.sort((a,b)=>b.totalPages-a.totalPages);
  }else if(sortBy === "year"){
    sortedBooks.sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing);
  }
  return sortedBooks;
 };
 const sortedReadBooks = sortBooks(readBooks);
 const sortedWishlist = sortBooks(wishList);

console.log(sortedReadBooks,"sortedReadBooks");
console.log(sortedWishlist,'ortedWishlist');
  return (
    <div className="container mx-auto px-4 py-5">

      <h2 className="my-4 rounded-3xl bg-amber-100 py-16 text-center text-4xl font-bold">
        Listed Books
      </h2>
      <div className="text-center">
        <select
        value={sortBy}
        onChange={(e) =>setSortBy(e.target.value)}
        defaultValue="pick a Runtime"
        className="select select-success"
        >
          <option disabled={true}>Sort by</option>
          <option>Rating</option>
          <option>Number of pages</option>
          <option>Publisher year</option>
        </select>
      </div>
      <div className="tabs tabs-border">

        {/* Read Books */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-5 md:p-10">

          {sortedReadBooks?.length > 0 ? (
            sortedReadBooks.map((book) => (
              <ListedBookCard
                key={book.bookId}
                book={book}
              />
            ))
          ) : (
            <p className="py-10 text-center text-lg font-semibold">
              No read books found
            </p>
          )}

        </div>


        {/* Wishlist */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Wishlist Books"
        />

        <div className="tab-content border-base-300 bg-base-100 p-5 md:p-10">

          {sortedWishlist?.length > 0 ? (
            sortedWishlist.map((book) => (
              <ListedBookCard
                key={book.bookId}
                book={book}
              />
            ))
          ) : (
            <p className="py-10 text-center text-lg font-semibold">
              No wishlist books found
            </p>
          )}

        </div>

      </div>
    </div>
  );
};

export default ListedBooks;