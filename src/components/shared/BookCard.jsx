import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div>
            <Link href={'/books/${book.bookId'}>
            <button className='btn w-full rounded x1 border-0 bg-slate-900 text-white transition-all hover:bg-emerald-600'>View Details  → </button>
            </Link>
        </div>
    );
};

export default BookCard;