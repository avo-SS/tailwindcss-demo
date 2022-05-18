import Image from 'next/image';
import Section from '../components/layout/Section';
import TailwindMark from '../public/svgs/tw-mark.svg';

export default function One() {
  return (
    <>
      <Section>
        <h1 className='text-center'>
          Why look into <TailwindMark className='inline-block w-36' />
        </h1>
      </Section>

      <Section>
        <h2>FAST-X Miro</h2>
        <div className='relative h-[800px] w-full max-w-7xl'>
          <Image
            src='/images/miro.png'
            alt='miro'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </Section>

      <Section>
        <h2>Next.js</h2>
        <div className='group flex h-[600px] w-1/2 max-w-7xl gap-12'>
          <a
            href='https://nextjs.org/docs/basic-features/built-in-css-support'
            target='_blank'
            className='relative w-full overflow-hidden rounded-xl duration-300 group-hover:shadow-lg group-hover:shadow-slate-400'>
            <Image
              src='/images/next_tailwind.png'
              alt='next-tailwind'
              layout='fill'
              objectFit='cover'
              className='duration-300 group-hover:scale-105'
            />
          </a>
        </div>
      </Section>

      <Section>
        <h2>State of CSS</h2>
        <div className='group flex h-[600px] w-1/2 max-w-7xl gap-12'>
          <a
            href='https://2021.stateofcss.com/en-US/demographics'
            target='_blank'
            className='relative w-full overflow-hidden rounded-xl duration-300 group-hover:shadow-lg group-hover:shadow-[#3e2f36]'>
            <Image
              src='/images/state_of_css.png'
              alt='state of css'
              layout='fill'
              objectFit='cover'
              className='duration-300 group-hover:scale-105'
            />
          </a>
        </div>
      </Section>
    </>
  );
}
