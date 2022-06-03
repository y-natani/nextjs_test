import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await res.unstable_revalidate("/isr");

    return res.json({ revalidated: true });
  } catch (err) {
    return res.json({ result: err });
  }
};

export default handler;
