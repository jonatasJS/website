import { IoMdRocket as RocketIcon } from 'react-icons/io';
// import ScrollToTop from 'react-scroll-up';
import ScrollToTop from 'react-scroll-up-button'; // eslint-disable-line

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  top?: boolean;
};

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span
      className={`text-gray-900 inline-flex items-center ${fontStyle}`}
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
      {props.top && (
        <ScrollToTop
          ContainerClassName="AnyClassForContainer"
          TransitionClassName="AnyClassForTransition"
          EasingType="easeOutBounce"
          AnimationDuration={1000}
        >
          <RocketIcon
            className="text-primary-500 stroke-current mr-1"
            style={{ width: '44', height: '44' }}
          />
        </ScrollToTop>
      )}
      <RocketIcon
        className="text-primary-500 stroke-current mr-1"
        style={{ width: '44', height: '44' }}
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
