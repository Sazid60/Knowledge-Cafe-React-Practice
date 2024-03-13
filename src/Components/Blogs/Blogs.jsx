import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3 shadow-xl p-8 rounded-xl mt-4 bg-[#0B0B0B0D]">
            <h1 className="text-2xl font-semibold">Blogs : {blogs.length}</h1>
            <div className="mt-6">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark : PropTypes.func.isRequired,
    handleMarkAsRead : PropTypes.func.isRequired
}
export default Blogs;