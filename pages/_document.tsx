import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
  Html,
} from 'next/document';
import { env } from 'process';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<{
    styles: JSX.Element;
    html: string;
    head?: (JSX.Element | null)[];
  }> {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      // eslint-disable-next-line react/jsx-no-useless-fragment
      styles: <> {initialProps.styles}</>,
    };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="title" content="Passphrase" />
          <meta
            name="description"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
          <meta name="robots" content="index,follow" />
          <meta property="og:title" content="Passphrase" />
          <meta property="og:url" content={env.seoLink} />
          <meta
            property="og:description"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
          <meta name="image" property="og:image" content="" />
          <meta name="twitter:title" content="Passphrase" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:card" content="Passphrase" />
          <meta property="twitter:domain" content={env.seoLink} />
          <meta property="twitter:url" content={env.seoLink} />
          <meta
            property="twitter:description"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          />
          <meta property="twitter:image" content="" />
          <script
            src="https://www.google.com/recaptcha/api.js"
            async
            defer
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
