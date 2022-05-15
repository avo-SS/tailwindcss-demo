const List = ({ children }) => {
  return (
    <ul className='mx-auto flex max-w-3xl flex-col gap-12 pl-14 font-medium text-gray-700'>
      {children}
    </ul>
  );
};

export default List;
