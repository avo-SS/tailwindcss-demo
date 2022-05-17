import Section from '../components/layout/Section';
import TailwindMark from '../public/svgs/tw-mark.svg';
import Bootstrap from '../components/svgs/Bootstrap';
import MUI from '../components/svgs/MUI';
import Chakra from '../components/svgs/Chakra';
import Bulma from '../components/svgs/Bulma';
import FastX from '../components/svgs/FastX';

const Highlight = ({ children }) => {
  return <span className='italic text-cyan-500'>{children}</span>;
};

const Three = () => {
  return (
    <>
      <Section>
        <h1>
          What is <TailwindMark className='inline-block w-36' />
        </h1>
      </Section>
      <Section>
        <h2>What it's not</h2>
        <div className='flex max-w-screen-xl flex-wrap items-center justify-center gap-16'>
          <Bulma className='h-36 w-36' />
          <Bootstrap className='h-40 w-40' />
          <FastX className='h-36 w-36' />
          <MUI className='h-44 w-44' />
          <Chakra className='h-36 w-36' />
        </div>
      </Section>

      <Section>
        <h2>Tailwind is</h2>
        <div className='relative mt-12 max-w-3xl translate-x-10'>
          <TailwindMark className='absolute -left-20 -top-4 ml-6 mb-2 inline-block w-12 rotate-[120deg]' />
          <q className='text-3xl font-medium'>
            A utility-first CSS framework packed with classes like{' '}
            <Highlight> flex</Highlight>,<Highlight> pt-4</Highlight>,
            <Highlight> text-center</Highlight>,
            <Highlight> rotate-90</Highlight>, that can be composed to build any
            design, directly in your markup.
          </q>
        </div>
      </Section>

      <Section className='font-space-mono'>
        <h2>
          Live{' '}
          <span className='rounded-md bg-rose-800 px-2 text-orange-300'>
            coding
          </span>{' '}
          example
        </h2>
        <div className='flex flex-col items-center justify-center gap-20'>
          <p className='text-3xl text-slate-700'>Style a button:</p>

          {/* TODO button here */}
        </div>
      </Section>
    </>
  );
};

export default Three;
