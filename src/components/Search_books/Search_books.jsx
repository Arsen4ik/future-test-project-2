import { useContext } from "react"
import { Context } from "../../Context/Context"

function Search_books() {
    const { setSearchedBook, setShowBooks, searchedBook, setCategory, setIsNewest } = useContext(Context)
    return (
        <section className="searching">
            <h1>Search for books</h1>
            <div className='search-books'>
                <input type="text" className=''
                    onChange={(e) => {
                        setSearchedBook(e.target.value)
                        !e.target.value && setShowBooks(false)
                    }}
                    value={searchedBook.toLocaleLowerCase()}
                    onKeyDown={(e) => e.key === 'Enter' && setShowBooks(true)} />
                <button onClick={() => searchedBook && setShowBooks(true)} >Search!</button>
            </div>
            <h2>Categories</h2>
            <h2>Sorting by</h2>
            <select id="cities" className='search-sorting' onChange={(e) => setCategory(e.target.value)}>
                <option value="all">all</option>
                <option value="Art">art</option>
                <option value="Biography">biography</option>
                <option value="Computers">computers</option>
                <option value="History">history</option>
                <option value="Medical">medical</option>
                <option value="Poetry">poetry</option>
            </select>
            <select id="cities" className='search-sorting' onChange={(e) => setIsNewest(e.target.value)}>
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
            </select>
        </section>
    )
}
export default Search_books