import React from "react";
import BookmarkForm from "../features/bookmarks/components/BookmarkForm";
import BookmarkSearch from "../features/bookmarks/components/BookmarkSearch";

const Sidebar = () => (
  <div className="bg-gray-800 text-gray-200 px-6 py-2">
    <BookmarkForm />
    <hr className="mY-4"/>
    <BookmarkSearch />
  </div>
)

export default Sidebar
