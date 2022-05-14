const Section = ({ children, className = '' }) => {
  return (
    <section
      className={`relative flex min-h-screen w-full flex-col items-center justify-center ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
