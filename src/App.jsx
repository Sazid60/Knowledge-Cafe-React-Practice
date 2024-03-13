import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
const[bookmarks, setBookmarks] = useState([])
const [readingTime , setReadingTime] = useState(0)

const handleAddToBookmark =(blog)=>{
// console.log('Bookmark is going to add ')
// console.log(blog)
const newBookmarks =[...bookmarks,blog]
setBookmarks(newBookmarks)
// console.log(bookmarks)
}

const handleMarkAsRead = (time,id) =>{
// console.log(time)
setReadingTime(readingTime + time)
console.log(readingTime)
// Remove from bookmarks wen marked as read 
const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !==id);
setBookmarks(remainingBookmarks) 
}
  return (
    <>
      <Header></Header>
      <div className='md:flex gap-3 max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
