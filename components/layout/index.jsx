import Head from 'next/head';
import Navigation from '../Navigation';
const Layout = ({ children }) => {
  return (
    <div className='relative min-h-screen bg-slate-200 font-inter'>
      <Head>
        <title>Tailwind CSS - Presentation</title>
        <link rel='icon' href='/svgs/ss.svg' />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Radio+Canada:wght@300;400;500;600;700&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        </style>
      </Head>

      <div className='image-mask absolute inset-0 bg-[url(/images/dot_grid.png)] bg-center' />

      <main className='relative px-12'>{children}</main>

      <Navigation />
    </div>
  );
};

export default Layout;
