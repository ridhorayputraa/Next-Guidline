import Image from "next/image";
import RootLayout from "./layout";
import Link from "next/link";

const getTime = async () => {
  const res = await fetch(
    // 1. -> ini adlaah bentuk nya Static data karna ada cache 
    "https://timeapi.io/api/Time/current/zone?timeZone=Asia/Jakarta"
  );
  // console.log(res)
  return res.json();
};

// karean ingin meamnggil await maka di top function nya harus
// di kasih async
export default async function Home() {
  const {dateTime} = await getTime();
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
