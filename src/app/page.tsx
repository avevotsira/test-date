import { format } from "date-fns";
import CilentSide from "./cilent-side";
import ServerSide from "./server-side";
export default function Home() {
  const event = {
    date: ["2025-02-07T17:00:00.000Z"],
  };

  const timeInPhnomPehn = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Asia/Phnom_Penh",
  }).format(new Date(event.date[0]));

  const time = new Date(event.date[0]);
  const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timezoneOffset = time.getTimezoneOffset();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>default time :{event.date[0]}</h1>
        <div>
          <h1>Parents Side</h1>
          <div>Current timezone: {timezoneName}</div>
          <div>Timezone offset: {timezoneOffset} minutes</div>
          <p>local datestring :{time.toLocaleString()}</p>
          <p>datefns: {format(new Date(event.date[0]), "dd-MM-yyyy")}</p>
          <p>time in phnom penh: {timeInPhnomPehn}</p>
        </div>
        <CilentSide event={event} />
        <ServerSide event={event} />
        test
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Test
      </footer>
    </div>
  );
}

