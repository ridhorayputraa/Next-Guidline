import Image from "next/image";
import RootLayout from "./layout";
import Link from "next/link";
import { cache } from "react";
import { json } from "stream/consumers";

const getTimeStatic = async () => {
  const ress = await fetch(
    "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Jakarta"
  );
  return ress.json();
};

const getTimeRevalidate = async () => {
  const res = await fetch(
    // 3. -> ini adlaah bentuk nya Incrementa; data karna datanya berubah (sesuai detik)
    // ISR -> imceremental site rendering
    "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Jakarta",
    {
      // adding Object parameter
      // ini adalah contoh isr dengan ISR selama 3 detik
      // datanta akan ke tahan atau cache selama 3 detik
      next: { revalidate: 3 },
    }
  );
  // console.log(res)
  return res.json();
};

const getTimeNew = async () => {
  const ress = await fetch(
    "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Jakarta",
    { cache: "no-cache" }
  );
  return ress.json();
};

// karean ingin meamnggil await maka di top function nya harus
// di kasih async
export default async function Home() {
  // pakai promise alll buat nge add semua function yang ada promise nya(async)
  // karena datanya banyak maka tampung pake array
  // yang dibawha adalah nama variable
  const [staticData, incrementData, noCacheData] = await Promise.all([
    getTimeStatic(),
    getTimeNew(),
    getTimeRevalidate(),
  ]);
  // console.log(time);

  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href="/dashboard">Ke dashboard bray</Link>
        {/* <h1>Mantapp</h1> */}
        <p className="text-pink-800">
          Data hasil fecth Increment Data :{incrementData.dateTime}
        </p>
        <p className="text-pink-800">
          Data hasil fecth Increment Data with to iso StringSting :
          {new Date(incrementData.dateTime).toISOString()}
        </p>

        <p className="text-blue-700">
          Data Fetch always hot (no-cache) :{" "}
          {new Date(noCacheData.dateTime).toISOString()}
        </p>

        <p>
          Data hasil fecth StaticData :
          {new Date(staticData.dateTime).toISOString()}
        </p>
        {/* <p>Data hasil fecth : {dateTime}</p>
        <p>Data hasil fecth : {dateTime}</p> */}
      </main>
    </RootLayout>
  );
}
