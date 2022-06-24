import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

export const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <meta property="og:url" content="http://localhost:5000?s=注目&page=1" />
        <meta
          name="twitter:url"
          content="http://localhost:5000?s=注目&page=1"
        />
        <link rel="canonical" href="http://localhost:5000?s=注目&page=1" />
        <meta
          name="twitter:title"
          content="http://localhost:5000?s=注目&page=1"
        />
        <meta
          name="twitter:description"
          content="http://localhost:5000?s=注目&page=1"
        />
      </Head>
      <h2>Topics</h2>
      <p>
        <Link href="/isr">
          <a>ISR</a>
        </Link>
      </p>
    </main>
  );
};

export default Home;
