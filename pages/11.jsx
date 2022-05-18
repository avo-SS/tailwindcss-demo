import Section from '../components/layout/Section';
import Check from '../public/svgs/check.svg';
import X from '../public/svgs/x.svg';

const Row = ({ children }) => (
  <tr className='odd:bg-white even:bg-slate-100'>{children}</tr>
);
const HCell = ({ children }) => (
  <th className='pb-8 pt-2 text-2xl'>{children}</th>
);
const Cell = ({ children }) => (
  <td className='py-6 px-3 text-center text-lg'>{children}</td>
);

const B = ({ children, red }) => (
  <p
    className={`mb-1 text-xl font-semibold
    ${red ? 'text-red-600' : 'text-green-600'}`}>
    {children}
  </p>
);

const Eleven = () => {
  return (
    <Section className='py-80'>
      <h2>Summary</h2>
      {/* CARD */}
      <div className='flex max-w-5xl flex-col items-center justify-center overflow-hidden border bg-white p-10 shadow-lg sm:rounded-lg'>
        {/* TABLE */}
        <table className='w-full table-fixed'>
          <thead className='border-b'>
            <Row>
              <HCell>
                Pros
                <Check className='ml-2 mb-1 inline-block h-6 w-6 text-green-500' />
              </HCell>
              <HCell>
                Cons
                <X className='ml-2 mb-1 inline-block h-6 w-6 text-red-600' />
              </HCell>
            </Row>
          </thead>
          <tbody>
            <Row>
              <Cell>
                <B>Not opinionated</B>
                You have full control over styling.
              </Cell>
              <Cell>
                <B red>Verbose HTML</B>
                The markup can feel cluttered.
              </Cell>
            </Row>
            <Row>
              <Cell>
                <B>Faster CSS Styling Process</B>
                Tailwind provides thousands of built-in classes.
              </Cell>
              <Cell>
                <B red>Additional learning curve</B>
                Have to get used to predefined classes.
              </Cell>
            </Row>
            <Row>
              <Cell>
                <B>Robust, Secure & Safe</B>
                Stable since its initial release, safely use it in production.
                Safely refactor code.
              </Cell>
              <Cell>
                <B red>Need an understanding of CSS</B>
                Other frameworks provides components, you don't need to know or
                modify any CSS.
              </Cell>
            </Row>
            <Row>
              <Cell>
                <B>Good documentation</B>
                Its easy to find the information you are looking for.
              </Cell>
              <Cell>
                <B red>Long classNames</B>
                Complex components will use many utility classes. Darkmode adds
                even more.
              </Cell>
            </Row>
            <Row>
              <Cell>
                <B>Flexible</B>
                The system is highly customizable.
              </Cell>
              <Cell>
                <B red>Harder to review PR</B>
                Semantic CSS is easier to parse than utility classes.
              </Cell>
            </Row>
            <Row>
              <Cell>
                <B>Optimized</B>
                Removes unused classes out of the box.
              </Cell>
              <Cell>
                <B red>Missing features</B>
                Tailwind isn't always up-to-date with bleeding-edge, newly
                released CSS features. But will update in a short time.
              </Cell>
            </Row>
            <Row>
              <Cell>
                <B>Responsive design made easy</B>
                Prefix any utility class with a breakpoint name.
              </Cell>
            </Row>
            <Row>
              <Cell>
                <B>Single source of truth</B>
                Everything encompassed by the configuration file.
              </Cell>
            </Row>
            <Row>
              <Cell>
                <B>Tooling & Options</B>
                Intellisense, prettier sorting.
                <br />
                Can be used with styled components, CSS modules, standard CSS.
              </Cell>
            </Row>
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default Eleven;
