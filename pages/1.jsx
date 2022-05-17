import Section from '../components/layout/Section';
import ListItem from '../components/ListItem';
import List from '../components/List';

const One = () => {
  return (
    <Section>
      <div className='mb-12 flex items-center gap-4'>
        <h1 className='mb-0'>Info</h1>
        <span className='text-7xl'>💡</span>
      </div>
      <List>
        <ListItem>
          <p>
            Most of the content from this presentation is taken from Tailwind's
            official website/documentation, and therefore it may be a little bit
            biased.
          </p>
        </ListItem>
        <ListItem>
          <p>During the presentation</p>
          <List small>
            <ListItem small>
              <p className='text-xl'>
                How can this be useful in my current project?
              </p>
            </ListItem>
            <ListItem small>
              <p className='text-xl'>
                How can this be useful in my next project?
              </p>
            </ListItem>
            <ListItem small>
              <p className='text-xl'>
                How can this be useful for creating a flexible component
                library?
              </p>
            </ListItem>
          </List>
        </ListItem>

        <ListItem>
          <p>
            Questions 🤔? Write them down so you don't forget, we will go
            through them at the end.
          </p>
        </ListItem>
      </List>
    </Section>
  );
};

export default One;
