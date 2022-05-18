import Section from '../components/layout/Section';
import TailwindDark from '../public/svgs/tw-logo-dark.svg';
const Home = () => {
  return (
    <Section>
      <div>
        <TailwindDark className='mb-4 h-24' />
        <p className='text-right font-space-mono text-xl'>
          presented May 19th, 2022
        </p>
      </div>
    </Section>
  );
};

export default Home;
