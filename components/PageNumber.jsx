import { useRouter } from 'next/router';

const PageNumber = ({ lastPageNum }) => {
  const router = useRouter();

  const pageNumber = parseInt(router.pathname.split('/')[1]);

  const toOridnal = (number) => {
    switch (number) {
      case 1:
        return '1st';
      case 2:
        return '2nd';
      case 3:
        return '3rd';
      default:
        return `${number}th`;
    }
  };

  return (
    <div className='w-8 min-w-max text-center text-2xl font-bold'>
      <p className='ordinal'>
        {isNaN(pageNumber)
          ? 'Intro'
          : lastPageNum === pageNumber
          ? 'End'
          : toOridnal(pageNumber)}
      </p>
    </div>
  );
};

export default PageNumber;
