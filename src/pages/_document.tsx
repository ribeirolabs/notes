import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="lofi">
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <style data-href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,200;0,400;0,600;0,800;1,200;1,400;1,600;1,800&display=swap">
          {`
          @font-face {
            font-family: 'JetBrains Mono';
            font-style: medium;
            font-weight: normal;
            font-display: swap;
          }
          `}
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
