import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog,handleAddToBookmark,handleMarkAsRead}) => {
    // console.log(blog)
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog
    return (
        <div className='mb-20 bg-white p-8 rounded-xl'>
            <img className='w-full mb-8 rounded-' src={cover} alt={`Cover Picture of ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <span>{reading_time} Min read </span> 
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-red-600 text-2xl font-bold'><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl mb-3 font-bold'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, index) => <span key={index}><a href=''>#{hashtag} </a></span>)
                }
            </p>
            <button onClick={()=> handleMarkAsRead(reading_time)} className='underline mt-4 text-purple-600 font-bold'>Mark as Read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func.isRequired,
    handleMarkAsRead : PropTypes.func.isRequired
}
export default Blog;