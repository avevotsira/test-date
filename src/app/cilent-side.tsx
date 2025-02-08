"use client";
import { format } from "date-fns";

interface Props {
  event: any;
}

export default function ClientSide({ event }: Props) {
  const time = new Date(event.date[0]);
  const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timezoneOffset = time.getTimezoneOffset();

  const timeInPhnomPehn = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Asia/Phnom_Penh",
  }).format(new Date(event.date[0]));

  return (
    <div>
      <h1>Client Side</h1>
      <div>Current timezone: {timezoneName}</div>
      <div>Timezone offset: {timezoneOffset} minutes</div>
      <div>locale string: {time.toLocaleString()}</div>
      <div>datefns: {format(new Date(event.date[0]), "dd-MM-yyyy")}</div>
      <div>time in phnom penh: {timeInPhnomPehn}</div>
    </div>
  );
}
