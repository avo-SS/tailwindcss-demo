import Section from '../components/layout/Section';
import Terminal from '../public/svgs/terminal.svg';

const Eight = () => {
  return (
    <Section>
      <h2>Command Line Interface (CLI)</h2>
      <Terminal className='h-44 w-44' />
      <h3>Build, Watch, Minify</h3>
    </Section>
  );
};

export default Eight;
