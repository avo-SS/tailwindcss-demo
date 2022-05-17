import React from 'react';

const Bulma = ({ className = '' }) => {
  return (
    <svg viewBox='0 0 128 128' className={className}>
      <path
        fill='#00D1B2'
        d='M59.2 0l40 40-24 24 32 31.9L59.4 128l-40-39.9 7.7-56z'></path>
    </svg>
  );
};

export default Bulma;
