import tw, { styled } from 'twin.macro';
import Section from '../components/layout/Section';
import btnStyle from '../styles/Button.module.css';

const TailwindStyledButton = tw.button`
  bg-green-300
  hover:bg-green-600
  shadow-lg
  px-8
  py-2
`;

const ConditionalButton = styled.button(({ isRed }) => [
  isRed ? tw`bg-red-400 hover:bg-red-700` : tw`bg-blue-500 hover:bg-blue-700`,
  tw`
    px-8
    py-2
    shadow-lg
    rounded-lg
  `,
]);

const styles = {
  base: tw`py-2 px-8 rounded-md shadow-lg transition`,
  yellow: tw`bg-yellow-200 hover:bg-yellow-400`,
  purple: tw`bg-purple-500 hover:bg-purple-600`,
};

const Ten = () => {
  return (
    <Section>
      <div className='flex gap-12'>
        {/* PURE TAILWIND */}
        <button className='rounded-lg bg-rose-300 px-8 py-2 shadow-lg duration-300 hover:bg-rose-400'>
          Tailwind
        </button>

        {/* STYLED */}
        <TailwindStyledButton>tw styled</TailwindStyledButton>

        {/* CONDITIONAL */}
        <ConditionalButton isRed>conditional</ConditionalButton>

        {/* EXTRACTED OBJECT */}
        <button type='button' css={[styles.yellow, styles.base]}>
          Extracted object
        </button>

        {/* MODULES */}
        <button className={btnStyle.btn}>ModuleCSS</button>
      </div>
    </Section>
  );
};

export default Ten;
