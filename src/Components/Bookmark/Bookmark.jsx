import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {

    const {title}= bookmark;
    return (
        <div className='shadow-xl p-4 rounded-xl bg-white'>
            <h3 className='text-xl font-semibold w-auto h-auto'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}
export default Bookmark;