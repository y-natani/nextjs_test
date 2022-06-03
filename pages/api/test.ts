import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    return res.json({ succeeded: "ok" });
  } catch (err) {
    return console.log(err);
  }
};

export default handler;
