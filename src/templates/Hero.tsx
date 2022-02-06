import Link from 'next/link';

// import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { ToogleTheme } from '../button/ToogleTheme';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Background } from '../styles/Background';
import { Logo } from './Logo';

const Hero = () => (
  <Background>
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>GitHub</a>
          </Link>
        </li> */}
        <li>
          <Button xl>
            <Link href="/singin">
              <a>Sign in</a>
            </Link>
          </Button>
        </li>
        <ToogleTheme />
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
