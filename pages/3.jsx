import Section from '../components/layout/Section';
import TailwindMark from '../public/svgs/tw-mark.svg';
import Bootstrap from '../components/svgs/Bootstrap';
import MUI from '../components/svgs/MUI';
import Chakra from '../components/svgs/Chakra';
import Bulma from '../components/svgs/Bulma';
import FastX from '../components/svgs/FastX';

const HighlightSpan = ({ text }) => {
  return <span className='text-cyan-500'>{text}</span>;
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
          <quote className='text-3xl font-medium italic '>
            A utility-first CSS framework packed with classes like{' '}
            <HighlightSpan text='flex' />, <HighlightSpan text='pt-4' />,{' '}
            <HighlightSpan text='text-center' /> and{' '}
            <HighlightSpan text='rotate-90' /> that can be composed to build any
            design, directly in your markup.
          </quote>
        </div>
      </Section>

      <Section>
        <h2 className='font-space-mono'>Live coding example</h2>
      </Section>
    </>
  );
};

export default Three;
