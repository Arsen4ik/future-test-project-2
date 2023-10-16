// import { Context } from '../../Context/Context';
import Book_details from '../Book_details/Book_details';
import Fetch_books from '../Fetch_books/Fetch_books';
import './Books_list.scss'
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Books_list() {
    const [showSomeBook, setShowSomeBook] = useState(null)
    const [countBooks, setCountBooks] = useState(10)
    return (
        <>
            {showSomeBook ? (
                <Book_details showSomeBook={showSomeBook} setShowSomeBook={setShowSomeBook} />
            ) : (
                <Fetch_books countBooks={countBooks} setCountBooks={setCountBooks} setShowSomeBook={setShowSomeBook} />
            )}
        </>
        
    )
}
export default Books_list