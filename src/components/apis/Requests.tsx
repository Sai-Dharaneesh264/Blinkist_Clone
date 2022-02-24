import axios from 'axios'
import React from 'react'
export const getAllBooks = async () => {
    const res = await axios.get('http://localhost:3004/books')
    return res.data;
 }


export const getBookDetail = async (bookId: string) => {
    const book = await axios.get(`http://localhost:3004/books/${bookId}`)
    console.log(book.data);
    return book.data;
}