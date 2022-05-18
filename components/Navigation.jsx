import { useEffect, useCallback, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import PageNumber from './PageNumber';
import ChevronRight from '../public/svgs/chevron-right.svg';
import ChevronLeft from '../public/svgs/chevron-left.svg';

function Navigation() {
  const lastPageNum = 12;
  const router = useRouter();
  const [section, setSection] = useState(0);
  const number = parseInt(router.route.split('/')[1]);
  const nextBtnRef = useRef();
  const prevBtnRef = useRef();

  useEffect(() => {
    setSection(0);
  }, [number]);

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

      case 'ArrowLeft':
        prevBtnRef.current.click();
        break;

      case 'ArrowRight':
        nextBtnRef.current.click();
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [handleKeydown]);

  const btn = `rounded-full bg-white p-2 shadow-md transition-colors duration-300 hover:cursor-pointer hover:bg-teal-300`;
  const disabled = `pointer-events-none opacity-30 shadow-none`;

  return (
    <nav className='fixed bottom-0 mx-auto flex w-full items-center justify-center gap-6 rounded-full pb-20 pt-10 opacity-0 duration-500  hover:opacity-100'>
      <button
        ref={prevBtnRef}
        onClick={() => changePage('prev')}
        className={`${btn} ${isNaN(number) && disabled}`}>
        <ChevronLeft className='h-6 w-6' />
      </button>
      <PageNumber lastPageNum={lastPageNum} />
      <button
        ref={nextBtnRef}
        onClick={() => changePage('next')}
        className={`${btn} ${number === lastPageNum && disabled}`}>
        <ChevronRight className='h-6 w-6' />
      </button>
    </nav>
  );
}

export default Navigation;
