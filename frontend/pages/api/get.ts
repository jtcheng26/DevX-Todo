// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  title: string;
  details: string;
};


export let tasks = [
  {
    title: "Task 1",
    details: "Details",
  },
  {
    title: "Task 2",
    details: "Details",
  },
  {
    title: "Task 3",
    details: "Details",
  },
  {
    title: "Task 4",
    details: "Details",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(tasks);
}
