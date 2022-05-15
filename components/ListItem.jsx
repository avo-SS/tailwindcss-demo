const ListItem = ({ children }) => {
  return (
    <li
      className='
        relative
        flex
        flex-col
        gap-4
        before:absolute
        before:top-2
        before:-left-10
        before:block
        before:h-4
        before:w-4
        before:skew-x-6
      before:bg-pink-500'
    >
      {children}{' '}
    </li>
  );
};

export default ListItem;
