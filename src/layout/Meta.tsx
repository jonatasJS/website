import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.ico`}
          key="favicon"
        />
        <style>
          {`
            .checkbox {
              opacity: 0;
              position: absolute;
            }
            
            .label {
              margin-left: 20px;
              width: 50px;
              height: 26px;
              background-color:#111;
              display: flex;
              border-radius:50px;
              align-items: center;
              justify-content: space-between;
              padding: 5px;
              position: relative;
              transform: scale(1.5);
            }

            .ball {
              width: 22px;
              height: 22px;
              background-color: white;
              position: absolute;
              top: 2px;
              left: 2px;
              border-radius: 50%;
              transition: transform 0.2s linear;
            }

            /*  target the elemenent after the label*/
            .checkbox:checked + .label .ball{
              transform: translateX(24px);
            }

            .fa-moon {
              color: #d5d5d5;
              width: 20px;
              height: 22px;
            }

            .fa-sun {
              color: yellow;
              width: 20px;
              height: 22px;
            }
          `}
        </style>
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
