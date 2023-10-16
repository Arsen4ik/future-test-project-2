/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import './Books_item.scss'
function Book_item({ book, setShowSomeBook }) {
    return (
        <div onClick={() => setShowSomeBook(book)} className="book">
            <img src={book.volumeInfo.imageLinks?.smallThumbnail ?? './book.svg'} alt="" />
            <h1>{book.volumeInfo.title}</h1>
            <p>категория: {book.volumeInfo.categories?.at(0) ?? 'отсутствует'}</p>
            {
                book.volumeInfo.authors ? (
                    <div>
                        <p>Авторы:</p>
                        <ul>
                            {
                                book.volumeInfo.authors.map((author, ind) => <li key={ind}>{author}</li>)
                            }
                        </ul>
                    </div>
                ) : <p>авторы неизвестны</p>
            }
        </div>
    )
}
export default Book_item