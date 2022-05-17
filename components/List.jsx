const List = ({ children, small, className = '' }) => {
  return (
    <ul
      className={`
      ${small ? '' : ' mx-auto'}
      flex
      max-w-3xl
      flex-col
      ${small ? 'gap-2' : 'gap-12'}
      pl-14
      font-medium
      text-gray-700
      ${className}
      `}>
      {children}
    </ul>
  );
};

export default List;
