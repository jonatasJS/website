import Link from 'next/link';
import { AiFillGithub as GitHubIcon } from 'react-icons/ai';
import {
  BsFacebook as FacebookIcon,
  BsTwitter as TwitterIcon,
  BsYoutube as YoutubeIcon,
  BsLinkedin as LinkedinIcon,
} from 'react-icons/bs';
import { SiGmail as GmailIcon } from 'react-icons/si';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo top={true} />}
        iconList={
          <>
            <Link href="/">
              <a style={{ color: '#4078c0' }}>
                <GitHubIcon />
              </a>
            </Link>

            <Link href="/">
              <a style={{ color: '#4267B2' }}>
                <FacebookIcon />
              </a>
            </Link>

            <Link href="/">
              <a style={{ color: '#1DA1F2' }}>
                <TwitterIcon />
              </a>
            </Link>

            <Link href="/">
              <a style={{ color: '#FF0000' }}>
                <YoutubeIcon />
              </a>
            </Link>

            <Link href="/">
              <a style={{ color: '#0e76a8' }}>
                <LinkedinIcon />
              </a>
            </Link>

            <Link href="/">
              <a style={{ color: '#c71610' }}>
                <GmailIcon />
              </a>
            </Link>
          </>
        }
      >
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/abouts">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/docs">
            <a>Docs</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/jonatasJS">
            <a>GitHub</a>
          </Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
