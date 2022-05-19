import React from 'react';
import Section from '../components/layout/Section';
import List from '../components/List';
import ListItem from '../components/ListItem';

const One = () => {
  return (
    <Section>
      <h2>Agenda</h2>
      <List small>
        <ListItem>
          <p>Info</p>
        </ListItem>
        <ListItem>
          <p>Why Tailwind</p>
        </ListItem>
        <ListItem>
          <p>What is Tailwind</p>
        </ListItem>
        <ListItem>
          <p>Core concepts</p>
        </ListItem>
        <ListItem>
          <p>Features</p>
        </ListItem>
        <ListItem>
          <p>Summary</p>
        </ListItem>
        <ListItem>
          <p>Q & A</p>
        </ListItem>
      </List>
    </Section>
  );
};

export default One;
