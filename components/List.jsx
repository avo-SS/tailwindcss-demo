const List = ({ children, small }) => {
  return (
    <ul
      className={`
      mx-auto
      flex
      max-w-3xl
      flex-col
      ${small ? 'gap-2' : 'gap-12'}
      pl-14
      font-medium
      text-gray-700
      `}
    >
      {children}
    </ul>
  );
};

export default List;
