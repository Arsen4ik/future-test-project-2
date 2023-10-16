/* eslint-disable react/prop-types */
function Book_details({ showSomeBook, setShowSomeBook }) {
    return (
        <>
            <img src="./arrow-left.svg" alt="" className="move-back" onClick={() => setShowSomeBook(null)} />
            <div className="big-book">
                {console.log(showSomeBook)}
                <img src={showSomeBook.volumeInfo.imageLinks?.thumbnail ?? './book.svg'} alt="" />
                <h1>{showSomeBook.volumeInfo.title}</h1>
                <p><span className="hints">Описание:</span><br />{showSomeBook.volumeInfo.description ?? 'описание отсутствует'}</p>
                <div>

                    <p className="hints">Авторы:</p>
                    {showSomeBook.volumeInfo.authors ? (
                        <ul>
                            {
                                showSomeBook.volumeInfo.authors.map((author, ind) => <li key={ind}>{author}</li>)
                            }
                        </ul>
                    ) : <p>авторы неизвестны</p>
                    }
                </div>
                <div>
                    <p className="hints">Категории:</p>
                    {showSomeBook.volumeInfo.categories ? (
                        <ul>
                            {
                                showSomeBook.volumeInfo.categories.map((category, ind) => <li key={ind}>{category}</li>)
                            }
                        </ul>
                    ) : <p>категории отсутствуют</p>
                    }
                </div>
            </div>
        </>
    )
}
export default Book_details