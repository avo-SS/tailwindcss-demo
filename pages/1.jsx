import Section from '../components/layout/Section';
import ListItem from '../components/ListItem';

const One = () => {
  return (
    <Section className='mx-auto max-w-3xl'>
      <div className='mb-12 flex items-center gap-4'>
        <h1 className='mb-0'>Info</h1>
        <span className='text-7xl'>💡</span>
      </div>
      <ul className='flex flex-col gap-12 pl-14 font-medium text-gray-700'>
        <ListItem>
          <p>
            Most of the content from this presentation is taken from Tailwind's
            official website/documentation, and therefore it may be a little bit
            biased.
          </p>
        </ListItem>

        <ListItem>
          <p>
            Questions 🤔? Write them down so you don't forget, we will go
            through them at the end.
          </p>
        </ListItem>
      </ul>
    </Section>
  );
};

export default One;
