import PropTypes from 'prop-types';

const List = ({ data }) => {
  return (
    <ol className='list-decimal'>
      {data?.map((item, index) => {
        return (
          <li key={index} className='py-1 relative left-4'>
            {item}
          </li>
        );
      })}
    </ol>
  );
};

export default List;

List.propTypes = {
  data: PropTypes.array,
};
