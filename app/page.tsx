import Image from "next/image";
import RootLayout from "./layout";
import Link from "next/link";
import { cache } from "react";

const getTimeStatic = async () => {
  const ress = await fetch(
    "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Jakarta"
  );
  return ress.json;
};

const getTime = async () => {
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

// karean ingin meamnggil await maka di top function nya harus
// di kasih async
export default async function Home() {
  const { dateTime } = await getTime();
  // console.log(time);

  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Link href="/dashboard">Ke dashboard bray</Link>
        {/* <h1>Mantapp</h1> */}

        <p>Data hasil fecth : {dateTime}</p>
      </main>
    </RootLayout>
  );
}
