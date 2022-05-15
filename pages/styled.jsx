import tw, { styled } from 'twin.macro';

const TailwindStyledButton = tw.button`
  bg-green-300
  hover:bg-green-600
  shadow-lg
  px-8
  py-2
`;

const ConditionalButton = styled.button(({ isRed, className }) => [
  isRed ? tw`bg-red-400 hover:bg-red-500` : tw`bg-blue-500 hover:bg-blue-700`,
  tw`
    px-8
    py-2
    rounded-lg
    transition
    transition-duration[300ms]
  `,
  className,
]);

const styles = {
  yellow: tw`bg-yellow-200 hover:bg-yellow-400 py-2 px-8 rounded-md shadow-lg transition`,
  orange: tw`bg-indigo-200`,
};

const Styled = () => {
  return (
    <div className='flex gap-12'>
      <TailwindStyledButton>Click me</TailwindStyledButton>
      <ConditionalButton isRed className='shadow-lg shadow-red-300'>
        Click me
      </ConditionalButton>
      <button
        type='button'
        css={`
          ${styles.yellow} shadow-
        `}
      >
        Click me
      </button>
    </div>
  );
};

export default Styled;
