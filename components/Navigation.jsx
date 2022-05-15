import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import PageNumber from './PageNumber';
import ChevronRight from '../public/svgs/chevron-right.svg';
import ChevronLeft from '../public/svgs/chevron-left.svg';

function Navigation() {
  const lastPageNum = 6;
  const router = useRouter();
  const [section, setSection] = useState(0);
  const number = parseInt(router.route.slice('/')[1]);

  const changePage = (direction) => {
    if (direction === 'next') {
      if (number === lastPageNum) return;
      isNaN(number) ? router.push('/1') : router.push(`/${number + 1}`);
    }

    if (direction === 'prev') {
      isNaN(number) || number === 1
        ? router.push('/')
        : router.push(`/${number - 1}`);
    }
  };

  const cycleSections = (section, direction) => {
    const sections = document.querySelectorAll('section');
    const maxLength = sections.length;

    if (section === 0 && direction === 'up') {
      sections[maxLength - 1]?.scrollIntoView();
      return maxLength - 1;
    } else if (section === maxLength - 1 && direction === 'down') {
      sections[0].scrollIntoView();
      return 0;
    } else {
      switch (direction) {
        case 'up':
          sections[section - 1]?.scrollIntoView();
          return section - 1;

        case 'down':
          sections[section + 1]?.scrollIntoView();
          return section + 1;
      }
    }
  };

  const handleKeydown = useCallback((e) => {
    const { key } = e;

    switch (key) {
      case 'ArrowUp':
        e.preventDefault();
        setSection((prev) => cycleSections(prev, 'up'));
        break;

      case 'ArrowDown':
        e.preventDefault();
        setSection((prev) => cycleSections(prev, 'down'));
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  return (
    <>
      <nav className='fixed bottom-0 mx-auto flex w-full items-center justify-center gap-6 rounded-full px-14 py-8 opacity-0 duration-500  hover:opacity-100'>
        <button
          onClick={() => changePage('prev')}
          className='rounded-full bg-white p-2 shadow-md duration-300 hover:cursor-pointer hover:bg-teal-300'>
          <ChevronLeft className='h-6 w-6' />
        </button>
        <PageNumber lastPageNum={lastPageNum} />
        <button
          onClick={() => changePage('next')}
          className='rounded-full bg-white p-2 shadow-md duration-300 hover:cursor-pointer hover:bg-teal-300'>
          <ChevronRight className='h-6 w-6' />
        </button>
      </nav>
      <nav>
        <button
          onClick={() => changePage('prev')}
          className='
          fixed
          top-0
          left-0
          h-screen
          w-56
          bg-gradient-to-r
          from-slate-800/30
          to-transparent
          opacity-0
          duration-500
          hover:opacity-100
          '>
          <span
            className='
            font-space-mono
            text-2xl
          text-teal-700
            '>
            {isNaN(number) ? 'FIRST' : 'PREV'}
          </span>
        </button>
        <button
          onClick={() => changePage('next')}
          className='
          fixed
          top-0
          right-0
          h-screen
          w-56
          bg-gradient-to-l
          from-slate-800/30
          to-transparent
          opacity-0
          duration-500
          hover:opacity-100
          '>
          <span
            className='
            font-space-mono
            text-2xl
          text-teal-800
            '>
            {number === lastPageNum ? 'END' : 'NEXT'}
          </span>
        </button>
      </nav>
    </>
  );
}

export default Navigation;
