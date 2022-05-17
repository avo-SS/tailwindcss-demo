const ListItem = ({ children, small }) => {
  const smallDot = 'before:top-3 before:-left-6 before:h-2 before:w-2';
  const largeDot = 'before:top-2 before:-left-10 before:h-4 before:w-4';

  return (
    <li
      className={`
        relative
        flex
        flex-col
        gap-4
        before:absolute
        before:block
        ${small ? smallDot : largeDot}
        before:skew-x-6
      before:bg-pink-500 
      `}>
      {children}{' '}
    </li>
  );
};

export default ListItem;
