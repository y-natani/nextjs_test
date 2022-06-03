import Link from "next/link";

export const Links = () => {
  return (
    <div>
      <h2>リンク</h2>
      <p>
        <Link href="/isr">
          <a>ISR TOP: index.tsx</a>
        </Link>
      </p>
      <p>
        <Link href="/isr/path/wildcard">
          <a>URL Wild Card: wildcard.tsx</a>
        </Link>
      </p>
    </div>
  );
};
