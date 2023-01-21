// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { tasks } from "./get";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  tasks.push({
    title: req.body["title"],
    details: req.body["details"],
  });

  res.status(200).json({ name: "John Doe" });
}
