import type { NextPage } from "next";
import Link from "next/link";

type PropTypes = {
  currentTime: string;
};

export const Home: NextPage<PropTypes> = ({ currentTime }) => {
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
