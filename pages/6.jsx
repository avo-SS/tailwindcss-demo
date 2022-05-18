import { useState } from 'react';
import Image from 'next/image';
import Search from '../public/svgs/search.svg';
import Bag from '../public/svgs/Bag.svg';
import Sun from '../public/svgs/sun.svg';
import Moon from '../public/svgs/moon.svg';
import Swap from '../public/svgs/swap.svg';
import BadgeCheck from '../public/svgs/badge-check.svg';
import CreditCard from '../public/svgs/credit-card.svg';
import Sparkles from '../public/svgs/sparkles.svg';
import Blob from '../public/svgs/blob.svg';

const li = `
    relative
    cursor-pointer
    px-6
    py-2
    text-brand-dark
    dark:text-accent-light
    before:absolute
    before:bottom-0
    before:h-[2px]
    before:w-0
    before:-translate-x-4
    before:bg-brand-dark/95
    before:transition-all
    before:duration-300
    hover:before:w-10/12
    before:hover:duration-300
`;

const navIcon = `
    h-11
    w-11
    cursor-pointer
    text-brand-dark
    duration-300
    rounded-full
    p-2
    dark:text-accent-light
    hover:bg-brand-dark
    hover:text-primary
    hover:drop-shadow-brand-sm
    dark:hover:drop-shadow-brand-dark-sm
`;

const badge = `
    h-32
    min-w-max
    rounded-full
    bg-secondary/50
    p-8
    text-secondary
`;

const imgContainer = `
    overflow-hidden
    rounded-brand-sm
    drop-shadow-brand
    dark:brightness-90
    dark:drop-shadow-brand-dark 
`;

const Six = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [swapContent, setSwapContent] = useState(false);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
  };

  const handleSwap = () => {
    setSwapContent((prev) => !prev);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='absolute top-0 left-0 min-h-screen w-full bg-primary font-radio-canada duration-700 dark:bg-primary-dark dark:text-accent-light'>
        <nav className='relative z-10 mx-auto flex h-20 max-w-7xl justify-between'>
          <div className='flex h-full items-center justify-center px-4 font-secondary text-2xl'>
            Brand Logo
          </div>

          <ul className='flex h-full items-center justify-center text-xl'>
            <li className={li}>Home</li>
            <li className={li}>News</li>
            <li className={li}>Products</li>
            <li className={li}>Contact</li>
          </ul>

          <ul className='flex h-full items-center justify-center gap-10 text-xl'>
            <li>
              <button onClick={handleSwap}>
                <Swap className={navIcon} />
              </button>
            </li>
            <li>
              <button>
                <Search className={navIcon} />
              </button>
            </li>
            <li>
              <button>
                <Bag className={navIcon} />
              </button>
            </li>
            <li>
              <button onClick={handleToggle}>
                {darkMode ? (
                  <Sun className={navIcon} />
                ) : (
                  <Moon className={navIcon} />
                )}
              </button>
            </li>
          </ul>
        </nav>

        <section className='relative h-screen w-full pt-20'>
          <div
            className={`
            ${!swapContent ? 'opacity-0' : ''}
             absolute right-80 top-40 h-3/5 w-[480px] ${imgContainer}`}>
            <Image
              src='/images/cosmetic_product.jpg'
              alt='cosmetics'
              layout='fill'
              objectFit='cover'
              priority
            />
          </div>
          <div
            className={`${
              swapContent ? 'opacity-0' : ''
            } absolute right-80 top-40 h-3/5 w-[480px] duration-700 ${imgContainer}`}>
            <Image
              src='/images/robot_toy.jpg'
              alt='cosmetics'
              layout='fill'
              objectFit='cover'
              priority
            />
          </div>
          <div
            className={`
            ${!swapContent ? 'opacity-0' : ''}
             absolute bottom-64 right-[45rem] h-1/3 w-96 ${imgContainer}`}>
            <Image
              src='/images/cosmetic_hand_lotion.jpg'
              alt='cosmetics'
              layout='fill'
              objectFit='cover'
              priority
            />
          </div>
          <div
            className={`
            ${swapContent ? 'opacity-0' : ''}
            absolute bottom-64 right-[45rem] h-1/3 w-96 duration-700 ${imgContainer}`}>
            <Image
              src='/images/robot_toy_stand.jpg'
              alt='cosmetics'
              layout='fill'
              objectFit='cover'
              priority
            />
          </div>

          <div className='relative mx-auto flex h-full max-w-7xl flex-col justify-center gap-12 pb-80'>
            <Blob
              className={`absolute left-[-1500px] top-[-1000px] rotate-[350deg] scale-[60%] duration-700 dark:brightness-[40%]
              ${!swapContent && 'hue-rotate-180'}`}
            />
            {swapContent ? (
              <h1 className='relative mb-0 font-primary text-9xl italic leading-[1.125] text-brand-dark dark:text-secondary'>
                Natural & organic
                <br />
                products with immense health benefits
              </h1>
            ) : (
              <h1 className='relative mb-0 font-primary text-8xl leading-[1.125] text-brand-dark dark:text-secondary'>
                Technology is a useful servant
                <br />
                but a dangerous master
              </h1>
            )}
            <p className='max-w-2xl text-2xl opacity-70 dark:opacity-80'>
              {swapContent
                ? `Keep your body well-groomed and enjoy the treatment of our
              products. Check out our newest collection!`
                : `Keep up with the robots, learn about the latest in tech and robotics. Check out our courses!`}
            </p>

            <button className='max-w-max rounded-brand-sm bg-accent-dark px-6 py-3 text-2xl font-semibold text-black/70 shadow-xl duration-300 hover:bg-brand-dark hover:text-brand-light dark:bg-tertiary dark:hover:bg-accent-dark dark:hover:text-tertiary-dark'>
              {swapContent ? `Buy to products ✨` : `Take a course 🎓`}
            </button>
          </div>
        </section>
        <section className='h-[26vh] w-full bg-tertiary dark:bg-tertiary-dark '>
          <div className='mx-auto flex h-full max-w-screen-2xl justify-between gap-20 py-16 px-32'>
            <div className='flex items-center gap-5 text-primary'>
              <BadgeCheck className={badge} />
              <h3>Validated by professionals</h3>
            </div>
            <div className='flex items-center gap-5 text-primary'>
              <CreditCard className={badge} />
              <h3>Easy payment and order</h3>
            </div>
            <div className='flex items-center gap-5 text-primary'>
              <Sparkles className={badge} />
              <h3>Always happy customers</h3>
            </div>
          </div>
        </section>
        <section className='bg-secondary dark:bg-secondary-dark'>
          <div className='mx-auto grid max-w-7xl grid-cols-2 items-center gap-8 py-44'>
            <div>
              <h2 className='mb-6 font-secondary font-normal'>
                One drop is enough!
              </h2>
              <p className='font-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                voluptatum et omnis minus. Cupiditate, dolore. Doloribus.
              </p>
            </div>
            <div
              className={`relative mx-auto h-[600px] w-[80%] ${imgContainer}`}>
              <Image
                src='/images/cosmetic_hand_drop.jpg'
                alt='cosmetics'
                layout='fill'
                objectFit='cover'
                priority
                className={!swapContent ? 'opacity-0' : undefined}
              />
              <Image
                src='/images/robot_arm_cup.jpg'
                alt='robot'
                layout='fill'
                objectFit='cover'
                priority
                className={swapContent ? 'opacity-0' : undefined}
              />
            </div>
          </div>
          <div className='mx-auto grid max-w-7xl grid-cols-2 items-center gap-8'>
            <div
              className={`
           
              relative mx-auto h-[600px] w-[80%] ${imgContainer}`}>
              <Image
                src='/images/cosmetic_face_happy.jpg'
                alt='cosmetics'
                layout='fill'
                objectFit='cover'
                priority
                className={!swapContent ? 'opacity-0' : undefined}
              />
              <Image
                src='/images/robot_arm_wine.jpg'
                alt='cosmetics'
                layout='fill'
                objectFit='cover'
                priority
                className={swapContent ? 'opacity-0' : undefined}
              />
            </div>

            <div>
              <h2 className='mb-6 font-secondary font-normal'>
                Feel the difference
              </h2>
              <p className='font-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                voluptatum et omnis minus. Cupiditate, dolore. Doloribus.
              </p>
            </div>
          </div>
        </section>

        <section className='h-[30vh] bg-secondary dark:bg-secondary-dark'></section>
      </div>
    </div>
  );
};

export default Six;
