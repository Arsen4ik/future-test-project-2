import './App.scss'
import { useState } from 'react';
import Search_books from './components/Search_books/Search_books';
import { Context } from './Context/Context';
import Books_list from './components/Books_list/Books_list';

export default function App() {

  const [searchedBook, setSearchedBook] = useState('')
  const [showBooks, setShowBooks] = useState(false)
  const [isNewest, setIsNewest] = useState('relevance')
  const [category, setCategory] = useState('all')

  return (
    <Context.Provider
      value={{ searchedBook, setSearchedBook, showBooks, setShowBooks, isNewest, setIsNewest, category, setCategory }}>
      <Search_books />
      {showBooks && <Books_list />}
    </Context.Provider>
  )
}


