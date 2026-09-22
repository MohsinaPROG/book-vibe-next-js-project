import React from "react";
import Image from "next/image";
import Link from "next/link";

const getBooks = async () => {
  try{
  const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
  );
  return response.json();
}catch(error){
  console.error("Error fetching books data:",error);
  return[];
}
};

const BookCard = ({ book }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      <div className="relative h-72">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold">
          {book.bookName}
        </h2>

        <p className="text-gray-500">
          by {book.author}
        </p>

        <p className="mt-2">
          ⭐ {book.rating}
        </p>

        {/* Details Button */}
        <Link
          href={`/books/${book.bookId}`}
          className="mt-4 block rounded-xl bg-indigo-600 px-4 py-3 text-center font-semibold text-white hover:bg-indigo-700"
        >
          View Details →
        </Link>
      </div>

    </div>
  );
};

const BooksDetail = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4">

      <h1 className="mb-10 text-3xl font-bold">
        Discover Books
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0, 9).map((book) => (
          <BookCard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>

    </section>
  );
};

export default BooksDetail;