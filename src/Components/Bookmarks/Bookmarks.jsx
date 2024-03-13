import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    // console.log(bookmarks)
    return (
        <div className="md:w-1/3 mt-4 p-8 bg-[#0B0B0B0D] shadow-xl space-y-2 rounded-xl">
            <div>
                <h3 className="text-xl font-semibold text-center mb-4 shadow-lg rounded-xl p-4 bg-[#6047EC1A] border-[#6047EC] border-2 text-[#6047EC]">Spent time on read : {readingTime} min</h3>
            </div>
            <h1 className="text-2xl font-semibold text-center mb-3">Bookmarked Blogs : {bookmarks.length}</h1>  <hr />
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }

        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}
export default Bookmarks;