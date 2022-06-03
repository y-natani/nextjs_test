import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await res.unstable_revalidate("/isr");
    await res.unstable_revalidate("/isr/path/:wildcard");

    return res.json({ revalidated: true });
  } catch (err) {
    return console.log(err);
  }
};

export default handler;
