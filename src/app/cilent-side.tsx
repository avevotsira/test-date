/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { format } from "date-fns";
interface Props {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  event: any;
}

export default function CilentSide({ event }: Props) {
  const time = new Date(event.date[0]);
  const timeInPhnomPehn = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Asia/Phnom_Penh",
  }).format(new Date(event.date[0]));
  return (
    <div>
      <h1>Client Side</h1>
      <div>locale string: {time.toLocaleString()}</div>
      <div>datefns: {format(new Date(event.date[0]), "dd-MM-yyyy")}</div>
      <div>time in phnom penh: {timeInPhnomPehn}</div>
    </div>
  );
}

