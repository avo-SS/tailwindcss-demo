import Image from 'next/image';
import Section from '../components/layout/Section';
import TailwindMark from '../public/svgs/tw-mark.svg';
import Figma from '../public/svgs/figma.svg';
const Seven = () => {
  return (
    <Section>
      <div className='flex items-center justify-center gap-24'>
        <div className='flex flex-col items-center justify-center'>
          <Figma className='inline-block h-36 w-28' />
          <h3 className='font-semibold'>Design System</h3>
        </div>
        <p className='text-6xl'> -> </p>
        <div className='flex flex-col items-center justify-center'>
          <TailwindMark className='inline-block h-36 w-36' />
          <h3 className='font-semibold'>Tailwind</h3>
        </div>
      </div>
      <a
        className='relative mt-20 h-[600px] w-full max-w-5xl cursor-pointer overflow-hidden rounded-2xl border border-slate-400 duration-300 hover:-translate-y-2 hover:shadow-2xl'
        href='https://www.figma.com/file/YF0Ux7pPj54v3TXsTB1Xx5/Skaidi-Designsystem---Utdanning.no?node-id=2735%3A3920'
        target='_blank'
        rel='noopener noreferrer'>
        <Image
          src='/images/skaidi.png'
          alt='miro'
          layout='fill'
          objectFit='cover'
          class
        />
      </a>
    </Section>
  );
};

export default Seven;
