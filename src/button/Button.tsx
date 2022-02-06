import { ReactNode } from 'react';

import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: ReactNode | string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={btnClass}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-md text-center;
          }

          .btn :global(a:hover) {
            @apply text-white;
          }

          .btn-base {
            @apply text-lg font-semibold py-1 px-2;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-2 px-3;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
