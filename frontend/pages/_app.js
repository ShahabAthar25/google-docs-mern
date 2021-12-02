import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Google Docs</title>
        <link
          rel="icon"
          href="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
