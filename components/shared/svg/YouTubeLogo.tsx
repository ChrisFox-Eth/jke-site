import { FC, SVGProps } from 'react';

export const YouTubeLogo: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width={50}
      height={50}
      style={{marginRight:20}}
      viewBox='0 0 512 512'
      fill='none'
      xmlSpace='preserve'
      >
      <path
        d='M422.6 193.6c-5.3-45.3-23.3-51.6-59-54 -50.8-3.5-164.3-3.5-215.1 0 -35.7 2.4-53.7 8.7-59 54 -4 33.6-4 91.1 0 124.8 5.3 45.3 23.3 51.6 59 54 50.9 3.5 164.3 3.5 215.1 0 35.7-2.4 53.7-8.7 59-54C426.6 284.8 426.6 227.3 422.6 193.6zM222.2 303.4v-94.6l90.7 47.3L222.2 303.4z'
        fill='#ffffff'
      />
    </svg>
  );
};
