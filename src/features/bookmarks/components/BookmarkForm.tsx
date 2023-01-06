import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import Bookmark from "../Bookmark.interface";
import { addBookmark } from "../bookmarks.slice";

const BookmarkForm = () => {
  const dispatch = useDispatch()

  const [newBookmark, setNewBookmark] = useState<Bookmark>({
    uuid: '1',
    url: 'safs',
    name: 'adsfasfasf',
    createdAt: 'asdfasf'
  })

  const createBookmark = useCallback((bookmark: Bookmark) => dispatch(addBookmark(bookmark)), [])

  return (
    <button onClick={() => createBookmark(newBookmark)}>shtoje</button>
  )
}

export default BookmarkForm
