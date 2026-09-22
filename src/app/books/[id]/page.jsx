

import ReadButton from "@/components/bookDetails/ReadButton";
import WishListButton from "@/components/bookDetails/WishListButton";
import Image from "next/image";
import Link from "next/link";

const getBooks = async () => {
  const response = await fetch(
    "http://localhost:3000/booksData.json"
  );

  return response.json();
};

const BookDetails = async ({ params }) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (book) => book.bookId === Number(id)
  );

  if (!book) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold">
          Book Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="container mx-auto my-16 px-4">
      <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-lg md:grid-cols-2">

        {/* Image */}
        <div className="relative h-[500px]">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            className="object-contain"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">

          <span className="mb-4 w-fit rounded-full bg-indigo-50 px-4 py-2 text-sm text-indigo-600">
            {book.category}
          </span>

          <h1 className="text-4xl font-bold">
            {book.bookName}
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            by {book.author}
          </p>

          <p className="mt-4 text-lg">
            ⭐ {book.rating}
          </p>

          <p className="mt-6 leading-7 text-gray-600">
            {book.review}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 border-y py-6">
            <div>
              <p className="text-sm text-gray-400">
                Publisher
              </p>
              <p className="font-semibold">
                {book.publisher}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Published
              </p>
              <p className="font-semibold">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Pages
              </p>
              <p className="font-semibold">
                {book.totalPages}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">
                Book ID
              </p>
              <p className="font-semibold">
                #{book.bookId}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          <Link
            href="/books"
            className="mt-8 w-fit rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            ← Back to Books
          </Link>
          <div className="card-actions mt-2">
            <ReadButton book={book} />
            <WishListButton book={book}/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookDetails;