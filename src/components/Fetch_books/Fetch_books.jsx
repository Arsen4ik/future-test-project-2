import { useContext } from "react";
import Book_item from "../Book_item/Books_item";
import { useQuery } from "@tanstack/react-query";
import { Context } from "../../Context/Context";

// eslint-disable-next-line react/prop-types
function Fetch_books({ countBooks, setCountBooks, setShowSomeBook }) {

    const { isNewest, category, searchedBook } = useContext(Context)

    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => {
            // console.log('fetch!');
            return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchedBook}&key=AIzaSyAkodI8LdZpWxpaKrNm4hT1pFzrpntjoJQ&maxResults=${countBooks}`)
                .then(res => res.json())
                .catch(err => console.error(err))
        },
        // staleTime: 0,
        // force: false,
    })
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>An error has occurred: {error.message}</h1>
    // console.log(data);
    let { items, totalItems } = data
    if (isNewest === 'newest') {
        items.sort((book1, book2) => new Date(book2.volumeInfo.publishedDate) - new Date(book1.volumeInfo.publishedDate))
    }
    if (category !== 'all') {
        items = items.filter(book => book.volumeInfo.categories?.at(0) === category)
    }
    // console.log(items);
    return (
        <>
            <h1><span>кол-во найденных книг: </span>{totalItems}</h1>
            <section className="books">
                {
                    items.map(book => <Book_item key={book.id} book={book} setShowSomeBook={setShowSomeBook} />)
                }
                <button className="load-more" onClick={() => setCountBooks(prev => prev + 30)}>Load more</button>
            </section>
        </>
    )
}
export default Fetch_books
