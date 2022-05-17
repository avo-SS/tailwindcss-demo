import Section from '../components/layout/Section';
import Check from '../public/svgs/check.svg';
import X from '../public/svgs/x.svg';

const Row = ({ children }) => (
  <tr className='px-4 py-2 odd:bg-white even:bg-slate-100'>{children}</tr>
);
const THead = ({ children }) => <th className='p-4 text-xl'>{children}</th>;
const TCell = ({ children }) => <td className='p-4 text-lg'>{children}</td>;

const Nine = () => {
  return (
    <>
      <Section>
        <h2>
          <Check className='inline-block h-20 w-20 text-green-500' /> Pros and
          Cons
          <X className='w-18 inline-block h-20 text-red-600' />
        </h2>
        {/* CARD */}
        <div className='flex flex-col items-center justify-center overflow-hidden bg-white shadow sm:rounded-lg'>
          {/* HEADER */}
          <div className='px-4 py-8 sm:px-6'>
            <h3 className='text-2xl font-medium leading-6 text-gray-900'>
              Summary
            </h3>
          </div>

          {/* BODY */}
          <div className='border-t border-gray-200 p-5'>
            <table className='even:slate-300 w-full table-fixed'>
              <Row>
                <THead>
                  Pros
                  <Check className='ml-2 mb-1 inline-block h-6 w-6 text-green-500' />
                </THead>
                <THead>
                  Cons
                  <X className='ml-2 mb-1 inline-block h-6 w-6 text-red-600' />
                </THead>
              </Row>
              <Row>
                <TCell>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Optio molestiae nostrum animi. Dolore possimus omnis in
                  aliquid odit ipsam earum ipsa alias quis accusantium!
                </TCell>
                <TCell>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nobis ex sit distinctio minima, ducimus suscipit.
                </TCell>
              </Row>
              <Row>
                <TCell>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                  dolore non veritatis quos? Unde, facere in. Sapiente illo
                  quibusdam natus nobis, et nulla quidem, hic modi accusamus est
                  architecto minus?
                </TCell>
                <TCell>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque, libero deserunt fuga accusamus harum et architecto amet
                  voluptatum? Tempore, excepturi.
                </TCell>
              </Row>
            </table>
          </div>
        </div>
      </Section>
      <Section>
        <h1>Q & A</h1>
        <div className='mb-24 flex animate-bounce items-start'>
          <div className='text-6xl'>😄</div>
          <div className='text-4xl'>🤚</div>
        </div>
      </Section>
    </>
  );
};

export default Nine;
