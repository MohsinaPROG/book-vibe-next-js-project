'use client';
import { BooksContext } from '@/context/BookContext';
import React,{ useContext} from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({book}) => {

   //const {wishlist,setWishlist} = useContext(BooksContext);
   const data  = useContext(BooksContext);
   
   const { wishList,setWishList}=data || {}
     //console.log(wishList,setWishList);


    const handleAddToWishlist = () =>{
        //console.log("read book btn triggered",book);
        setWishList([...wishList,book])
        toast.success(`You have read "${book.bookName}"`);
        
        
    }

    return <button className="btn btn-primary flex-1" onClick={()=>handleAddToWishlist()}>Add to Wishlist</button>
};

export default WishListButton;