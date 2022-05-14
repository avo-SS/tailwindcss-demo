import React from 'react';

const Bootstrap = ({ className = '' }) => {
  return (
    <svg
      width='301'
      height='239'
      viewBox='0 0 301 239'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M33.2046 31.234C32.6367 14.9844 45.3428 0 62.5175 0H238.504C255.679 0 268.385 14.9844 267.817 31.234C267.272 46.8434 267.98 67.0635 273.087 83.5504C278.21 100.088 286.85 110.542 301 111.885V127.115C286.85 128.458 278.21 138.912 273.087 155.45C267.98 171.936 267.272 192.157 267.817 207.767C268.385 224.016 255.679 239 238.504 239H62.5175C45.3428 239 32.6367 224.016 33.2052 207.767C33.7502 192.157 33.0418 171.936 27.9342 155.45C22.8113 138.912 14.1505 128.458 0 127.115V111.885C14.1499 110.542 22.8113 100.088 27.9342 83.5504C33.0418 67.0635 33.7502 46.8434 33.2046 31.234V31.234Z'
        fill='url(#paint0_linear_108_113)'
      />
      <g filter='url(#filter0_d_108_113)'>
        <path
          d='M157.027 183.032C184.832 183.032 201.588 169.467 201.588 147.091C201.588 130.178 189.633 117.933 171.881 115.995V115.29C184.923 113.176 195.158 101.108 195.158 87.6302C195.158 68.4264 179.942 55.917 156.755 55.917H104.586V183.032H157.027ZM124.874 72.0378H151.865C166.537 72.0378 174.869 78.5564 174.869 90.3605C174.869 102.958 165.179 110.005 147.608 110.005H124.874V72.0378V72.0378ZM124.874 166.912V125.069H151.683C170.884 125.069 180.847 132.116 180.847 145.858C180.847 159.6 171.156 166.912 152.861 166.912H124.874V166.912Z'
          fill='url(#paint1_linear_108_113)'
        />
        <path
          d='M157.027 183.032C184.832 183.032 201.588 169.467 201.588 147.091C201.588 130.178 189.633 117.933 171.881 115.995V115.29C184.923 113.176 195.158 101.108 195.158 87.6302C195.158 68.4264 179.942 55.917 156.755 55.917H104.586V183.032H157.027ZM124.874 72.0378H151.865C166.537 72.0378 174.869 78.5564 174.869 90.3605C174.869 102.958 165.179 110.005 147.608 110.005H124.874V72.0378V72.0378ZM124.874 166.912V125.069H151.683C170.884 125.069 180.847 132.116 180.847 145.858C180.847 159.6 171.156 166.912 152.861 166.912H124.874V166.912Z'
          stroke='white'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_108_113'
          x='88.0859'
          y='43.417'
          width='130.002'
          height='160.115'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='8' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_108_113'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_108_113'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_108_113'
          x1='44.7261'
          y1='6.32531'
          x2='307.019'
          y2='215.282'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#9013FE' />
          <stop offset='1' stop-color='#6610F2' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_108_113'
          x1='113.761'
          y1='64.2838'
          x2='172.242'
          y2='163.543'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='white' />
          <stop offset='1' stop-color='#F1E5FC' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Bootstrap;
