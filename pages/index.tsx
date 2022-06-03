import type { NextPage } from "next";
import Link from "next/link";

export const Home: NextPage = () => {
  return (
    <main>
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
