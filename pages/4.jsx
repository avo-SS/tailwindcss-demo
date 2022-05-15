import React from 'react';
import Section from '../components/layout/Section';
import ListItem from '../components/ListItem';
import List from '../components/List';
import Vue from '../components/svgs/Vue';

const Highlight = ({ children }) => (
  <span className='italic text-[#41b883]'>{children}</span>
);

const Four = () => {
  return (
    <>
      <Section>
        <h1>Core concepts</h1>
        <List>
          <ListItem>
            <p className='text-3xl'>CSS stops growing</p>
            <p>
              Every time you add a new feature the CSS gets bigger. But with
              utilities, everything is reusable, so you rarely need to write new
              CSS.{' '}
            </p>
          </ListItem>
          <ListItem>
            <p className='text-3xl'>More productive </p>
            <p>Working exclusively in one file</p>
            <p>
              What About{' '}
              <span className='font-bold'>Separation of Concerns?</span>
            </p>
          </ListItem>
        </List>
      </Section>

      <Section>
        <quote className='relative flex max-w-3xl flex-col gap-4  font-medium'>
          <Vue className='absolute -left-20 -top-8 h-16 w-16 rotate-12' />
          <p>
            To answer this question, it is important for us to agree that
            <Highlight>
              {' '}
              separation of concerns is not equal to separation of file types.{' '}
            </Highlight>
          </p>
          <p>
            The goal of engineering principles is to improve maintainability of
            codebases. [...] <Highlight> In modern UI development, </Highlight>
            we have found that instead of dividing the codebase into three huge
            layers that interweave with one another, it makes much more sense to
            divide them into loosely coupled components and compose them.
          </p>
          <p>
            <Highlight> Inside a component, </Highlight> its template, logic,
            and styles are inherently coupled, and collocating them actually
            makes the component
            <Highlight> more cohesive and maintainable. </Highlight>
          </p>
          <a
            href='https://vuejs.org/guide/scaling-up/sfc.html#what-about-separation-of-concerns'
            target='_blank'
            rel='noopener noreferrer'
            className='hover: mt-6 text-2xl font-semibold text-[#41b883] underline underline-offset-auto'
          >
            - Vue.js
          </a>
        </quote>
      </Section>

      <Section>
        <List>
          <ListItem>
            <p className='text-3xl'>"Safe"</p>
            <p>
              No need to worry about breaking something else if you remove some
              classes as these are all utilities and they reside in the same
              component.
            </p>
          </ListItem>
          <ListItem>
            <p className='text-3xl'>Easier to maintain</p>
            <p>Less CSS files to keep track of</p>
          </ListItem>
          <ListItem>
            <p className='text-3xl'>
              How is this different from inline styling?
            </p>
            <p>- Design with constraints, predefined design system</p>
            <p>
              - Responsive design, no media queries available when inline
              styling
            </p>
            <p>
              - Hover, focus, and other states. First, last, even, odd.
              Pseudo-classes.
            </p>
          </ListItem>
        </List>
      </Section>
    </>
  );
};

export default Four;
