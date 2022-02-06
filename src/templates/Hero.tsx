import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li> */}
        <li>
          <Link href="/singin">
            <a>Sign in</a>
          </Link>
        </li>
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <div className="ball" />
        </label>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500">Next Rockets{'\n'}</span>
            {'Solução para os seu problemas'}
          </>
        }
        description="Venha criar um site pessoal ou para sua empresa com designs interativos."
        button={
          <Link href="/dashboard">
            <a>
              <Button xl>Começar agora</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
