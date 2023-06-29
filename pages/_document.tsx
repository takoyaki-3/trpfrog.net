import {Head, Html, Main, NextScript} from 'next/document';
import Favicon from '../components/head/Favicon'
import fontVariables from "../lib/googleFonts";
import GoogleFonts from "../components/GoogleFonts";

const MyDocument = () => {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta charSet="utf-8"/>
        <GoogleFonts/>
        <Favicon/>
      </Head>
      <body className={fontVariables}>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  );
}

export default MyDocument;
