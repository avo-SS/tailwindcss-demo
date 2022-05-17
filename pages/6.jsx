import Image from 'next/image';
import Section from '../components/layout/Section';

const imgContainer = `
    relative
    w-full
    cursor-pointer
    overflow-hidden
    rounded-2xl
    duration-200
`;

const Six = () => {
  const handleZoom = (ref, index) => {
    let translateX = '';
    let translateY = '';

    switch (index) {
      case 0:
        translateX = 'translate-x-1/2';
        translateY = 'translate-y-1/2';
        break;
      case 1:
        translateX = '-translate-x-1/2';
        translateY = 'translate-y-1/2';
        break;
      case 2:
        translateX = 'translate-x-1/2';
        translateY = '-translate-y-1/2';
        break;
      case 3:
        translateX = '-translate-x-1/2';
        translateY = '-translate-y-1/2';
        break;
    }

    if (
      ref.target &&
      !ref.target.parentElement.parentElement.classList.contains('active')
    ) {
      ref.target.parentElement.parentElement.classList.add(
        'active',
        'z-20',
        translateX,
        translateY,
        'scale-150'
      );
    } else {
      ref.target.parentElement.parentElement.classList.remove(
        'active',
        translateX,
        translateY,
        'scale-150'
      );
      setTimeout(() => {
        ref.target.parentElement.parentElement.classList.remove('z-20');
      }, [100]);
    }
  };

  return (
    <Section>
      <div className='grid h-[80vh] w-full max-w-screen-2xl grid-cols-2 gap-16'>
        <div onClick={(e) => handleZoom(e, 0)} className={imgContainer}>
          <Image
            src='/images/cosmetics_light.png'
            alt='cosmetics'
            layout='fill'
            objectFit='cover'
            objectPosition='top center'
            priority
          />
        </div>
        <div onClick={(e) => handleZoom(e, 1)} className={imgContainer}>
          <Image
            src='/images/cosmetics_dark.png'
            alt='cosmetics'
            layout='fill'
            objectFit='cover'
            objectPosition='top'
            priority
          />
        </div>
        <div onClick={(e) => handleZoom(e, 2)} className={imgContainer}>
          <Image
            src='/images/tech_light.png'
            alt='tech'
            layout='fill'
            objectFit='cover'
            objectPosition='top'
            priority
          />
        </div>
        <div onClick={(e) => handleZoom(e, 3)} className={imgContainer}>
          <Image
            src='/images/tech_dark.png'
            alt='tech'
            layout='fill'
            objectFit='cover'
            objectPosition='top'
            priority
          />
        </div>
      </div>
    </Section>
  );
};

export default Six;
